import pandas as pd
import numpy as np
import xgboost as xgb
from datetime import datetime, timedelta
from typing import List, Dict, Any, Tuple
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.preprocessing import StandardScaler
import warnings
warnings.filterwarnings('ignore')

class XGBoostModel:
    def __init__(self, investimento_tipo: str = 'AÇÃO', lookback_days: int = 30):
        """
        Inicializa o modelo XGBoost para previsão de investimentos.
        
        Args:
            investimento_tipo: Tipo do investimento ('AÇÃO', 'RENDA_FIXA', 'FUNDO')
            lookback_days: Número de dias históricos para usar como features
        """
        self.investimento_tipo = investimento_tipo
        self.lookback_days = lookback_days
        
        # Parâmetros específicos por tipo de investimento
        if investimento_tipo == 'AÇÃO':
            self.params = {
                'objective': 'reg:squarederror',
                'n_estimators': 200,
                'max_depth': 6,
                'learning_rate': 0.1,
                'subsample': 0.8,
                'colsample_bytree': 0.8,
                'random_state': 42
            }
        elif investimento_tipo == 'RENDA_FIXA':
            self.params = {
                'objective': 'reg:squarederror',
                'n_estimators': 100,
                'max_depth': 4,
                'learning_rate': 0.05,
                'subsample': 0.9,
                'colsample_bytree': 0.9,
                'random_state': 42
            }
        else:  # FUNDO
            self.params = {
                'objective': 'reg:squarederror',
                'n_estimators': 150,
                'max_depth': 5,
                'learning_rate': 0.08,
                'subsample': 0.85,
                'colsample_bytree': 0.85,
                'random_state': 42
            }
        
        self.model = xgb.XGBRegressor(**self.params)
        self.scaler = StandardScaler()
        self.is_fitted = False
        self.feature_names = []
        
    def criar_features(self, dados_historicos: List[Dict[str, Any]]) -> pd.DataFrame:
        """
        Cria features técnicas a partir dos dados históricos.
        
        Args:
            dados_historicos: Lista com dados históricos
            
        Returns:
            DataFrame com features técnicas
        """
        df = pd.DataFrame(dados_historicos)
        df['data'] = pd.to_datetime(df['data'])
        df = df.sort_values('data').reset_index(drop=True)
        
        # Features básicas
        df['valor_lag1'] = df['valor'].shift(1)
        df['valor_lag2'] = df['valor'].shift(2)
        df['valor_lag3'] = df['valor'].shift(3)
        df['valor_lag7'] = df['valor'].shift(7)
        
        # Médias móveis
        df['ma_7'] = df['valor'].rolling(window=7, min_periods=1).mean()
        df['ma_14'] = df['valor'].rolling(window=14, min_periods=1).mean()
        df['ma_30'] = df['valor'].rolling(window=30, min_periods=1).mean()
        
        # Volatilidade
        df['volatilidade_7'] = df['valor'].rolling(window=7, min_periods=1).std()
        df['volatilidade_14'] = df['valor'].rolling(window=14, min_periods=1).std()
        
        # Retornos
        df['retorno_1d'] = df['valor'].pct_change(1)
        df['retorno_7d'] = df['valor'].pct_change(7)
        df['retorno_14d'] = df['valor'].pct_change(14)
        
        # RSI (Relative Strength Index)
        df['rsi'] = self.calcular_rsi(df['valor'])
        
        # Bollinger Bands
        df['bb_upper'], df['bb_lower'] = self.calcular_bollinger_bands(df['valor'])
        df['bb_position'] = (df['valor'] - df['bb_lower']) / (df['bb_upper'] - df['bb_lower'])
        
        # Features temporais
        df['dia_semana'] = df['data'].dt.dayofweek
        df['dia_mes'] = df['data'].dt.day
        df['mes'] = df['data'].dt.month
        df['trimestre'] = df['data'].dt.quarter
        
        # Features específicas por tipo
        if self.investimento_tipo == 'AÇÃO':
            df['momentum'] = df['valor'] / df['ma_14'] - 1
            df['price_position'] = (df['valor'] - df['valor'].rolling(52).min()) / \
                                  (df['valor'].rolling(52).max() - df['valor'].rolling(52).min())
        
        return df
    
    def calcular_rsi(self, valores: pd.Series, periodo: int = 14) -> pd.Series:
        """Calcula o RSI (Relative Strength Index)"""
        delta = valores.diff()
        ganho = (delta.where(delta > 0, 0)).rolling(window=periodo, min_periods=1).mean()
        perda = (-delta.where(delta < 0, 0)).rolling(window=periodo, min_periods=1).mean()
        rs = ganho / perda
        rsi = 100 - (100 / (1 + rs))
        return rsi
    
    def calcular_bollinger_bands(self, valores: pd.Series, periodo: int = 20, desvios: int = 2) -> Tuple[pd.Series, pd.Series]:
        """Calcula as Bollinger Bands"""
        ma = valores.rolling(window=periodo, min_periods=1).mean()
        std = valores.rolling(window=periodo, min_periods=1).std()
        upper = ma + (std * desvios)
        lower = ma - (std * desvios)
        return upper, lower
    
    def preparar_dados_treino(self, df: pd.DataFrame) -> Tuple[np.ndarray, np.ndarray]:
        """
        Prepara os dados para treinamento.
        
        Args:
            df: DataFrame com features
            
        Returns:
            X (features) e y (target)
        """
        # Selecionar features (excluir colunas não numéricas)
        feature_cols = [col for col in df.columns if col not in ['data', 'valor']]
        
        # Remover linhas com valores nulos
        df_clean = df.dropna()
        
        if len(df_clean) < self.lookback_days:
            raise ValueError(f"Dados insuficientes após limpeza (mínimo {self.lookback_days} registros)")
        
        X = df_clean[feature_cols].values
        y = df_clean['valor'].values
        
        self.feature_names = feature_cols
        
        return X, y
    
    def treinar(self, dados_historicos: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Treina o modelo XGBoost com os dados históricos.
        
        Args:
            dados_historicos: Lista com dados históricos
            
        Returns:
            Métricas de treinamento
        """
        try:
            # Criar features
            df = self.criar_features(dados_historicos)
            
            # Preparar dados
            X, y = self.preparar_dados_treino(df)
            
            # Normalizar features
            X_scaled = self.scaler.fit_transform(X)
            
            # Treinar modelo
            self.model.fit(X_scaled, y)
            self.is_fitted = True
            
            # Calcular métricas de treinamento
            y_pred = self.model.predict(X_scaled)
            mae = mean_absolute_error(y, y_pred)
            mse = mean_squared_error(y, y_pred)
            rmse = np.sqrt(mse)
            r2 = r2_score(y, y_pred)
            mape = np.mean(np.abs((y - y_pred) / y)) * 100
            
            return {
                'status': 'sucesso',
                'mae': mae,
                'mse': mse,
                'rmse': rmse,
                'r2': r2,
                'mape': mape,
                'registros_treinamento': len(X),
                'features_utilizadas': len(self.feature_names),
                'data_ultimo_treino': datetime.now().isoformat()
            }
            
        except Exception as e:
            return {
                'status': 'erro',
                'erro': str(e)
            }
    
    def prever(self, dados_historicos: List[Dict[str, Any]], dias_futuro: int = 30) -> Dict[str, Any]:
        """
        Realiza previsões para os próximos dias.
        
        Args:
            dados_historicos: Dados históricos para base da previsão
            dias_futuro: Número de dias para prever
            
        Returns:
            Previsões
        """
        if not self.is_fitted:
            return {
                'status': 'erro',
                'erro': 'Modelo não foi treinado'
            }
        
        try:
            # Criar features dos dados históricos
            df = self.criar_features(dados_historicos)
            
            previsoes = []
            df_trabalho = df.copy()
            
            # Fazer previsões sequenciais
            for i in range(dias_futuro):
                # Preparar features para previsão
                ultima_linha = df_trabalho.iloc[-1:].copy()
                X_pred = ultima_linha[self.feature_names].values
                
                # Normalizar
                X_pred_scaled = self.scaler.transform(X_pred)
                
                # Fazer previsão
                valor_previsto = self.model.predict(X_pred_scaled)[0]
                
                # Data da previsão
                ultima_data = df_trabalho['data'].iloc[-1]
                proxima_data = ultima_data + timedelta(days=1)
                
                # Adicionar previsão à lista
                previsoes.append({
                    'data': proxima_data.isoformat(),
                    'valor_previsto': float(valor_previsto),
                    'confianca': self.calcular_confianca(valor_previsto, df_trabalho['valor'].values)
                })
                
                # Atualizar dados para próxima previsão
                nova_linha = {
                    'data': proxima_data,
                    'valor': valor_previsto
                }
                df_trabalho = pd.concat([df_trabalho, pd.DataFrame([nova_linha])], ignore_index=True)
                df_trabalho = self.criar_features(df_trabalho.to_dict('records'))
            
            return {
                'status': 'sucesso',
                'previsoes': previsoes,
                'periodo_previsao': dias_futuro,
                'data_previsao': datetime.now().isoformat(),
                'modelo': 'XGBoost'
            }
            
        except Exception as e:
            return {
                'status': 'erro',
                'erro': str(e)
            }
    
    def calcular_confianca(self, valor_previsto: float, valores_historicos: np.ndarray) -> float:
        """
        Calcula um score de confiança baseado na variabilidade histórica.
        
        Args:
            valor_previsto: Valor previsto
            valores_historicos: Valores históricos
            
        Returns:
            Score de confiança (0-1)
        """
        std_historico = np.std(valores_historicos)
        media_historica = np.mean(valores_historicos)
        
        # Distância da previsão em relação à média histórica
        distancia_normalizada = abs(valor_previsto - media_historica) / std_historico
        
        # Converter para score de confiança (quanto menor a distância, maior a confiança)
        confianca = max(0, 1 - (distancia_normalizada / 3))
        
        return float(confianca)
    
    def obter_importancia_features(self) -> Dict[str, float]:
        """
        Retorna a importância das features no modelo.
        
        Returns:
            Dicionário com importância das features
        """
        if not self.is_fitted:
            return {}
        
        importancia = self.model.feature_importances_
        return dict(zip(self.feature_names, importancia))
    
    def avaliar_modelo(self, dados_teste: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Avalia o desempenho do modelo com dados de teste.
        
        Args:
            dados_teste: Dados para avaliação
            
        Returns:
            Métricas de avaliação
        """
        if not self.is_fitted:
            return {
                'status': 'erro',
                'erro': 'Modelo não foi treinado'
            }
        
        try:
            # Criar features dos dados de teste
            df_teste = self.criar_features(dados_teste)
            X_teste, y_teste = self.preparar_dados_treino(df_teste)
            
            # Normalizar
            X_teste_scaled = self.scaler.transform(X_teste)
            
            # Fazer previsões
            y_pred = self.model.predict(X_teste_scaled)
            
            # Calcular métricas
            mae = mean_absolute_error(y_teste, y_pred)
            mse = mean_squared_error(y_teste, y_pred)
            rmse = np.sqrt(mse)
            r2 = r2_score(y_teste, y_pred)
            mape = np.mean(np.abs((y_teste - y_pred) / y_teste)) * 100
            
            return {
                'status': 'sucesso',
                'mae': mae,
                'mse': mse,
                'rmse': rmse,
                'r2': r2,
                'mape': mape,
                'registros_teste': len(X_teste)
            }
            
        except Exception as e:
            return {
                'status': 'erro',
                'erro': str(e)
            }
    
    def exportar_modelo(self, caminho: str) -> bool:
        """
        Exporta o modelo treinado para um arquivo.
        
        Args:
            caminho: Caminho para salvar o modelo
            
        Returns:
            True se salvou com sucesso
        """
        if not self.is_fitted:
            return False
        
        try:
            import joblib
            modelo_completo = {
                'model': self.model,
                'scaler': self.scaler,
                'feature_names': self.feature_names,
                'params': self.params,
                'investimento_tipo': self.investimento_tipo,
                'lookback_days': self.lookback_days
            }
            joblib.dump(modelo_completo, caminho)
            return True
        except:
            return False
    
    def importar_modelo(self, caminho: str) -> bool:
        """
        Importa um modelo treinado de um arquivo.
        
        Args:
            caminho: Caminho do arquivo do modelo
            
        Returns:
            True se carregou com sucesso
        """
        try:
            import joblib
            modelo_completo = joblib.load(caminho)
            
            self.model = modelo_completo['model']
            self.scaler = modelo_completo['scaler']
            self.feature_names = modelo_completo['feature_names']
            self.params = modelo_completo['params']
            self.investimento_tipo = modelo_completo['investimento_tipo']
            self.lookback_days = modelo_completo['lookback_days']
            self.is_fitted = True
            
            return True
        except:
            return False

# Exemplo de uso
if __name__ == "__main__":
    # Dados de exemplo
    dados_exemplo = [
        {'data': '2023-01-01', 'valor': 100.0},
        {'data': '2023-01-02', 'valor': 102.5},
        {'data': '2023-01-03', 'valor': 98.7},
        # ... mais dados (mínimo 30 registros)
    ]
    
    # Criar e treinar modelo
    modelo = XGBoostModel('AÇÃO')
    resultado_treino = modelo.treinar(dados_exemplo)
    print("Resultado do treinamento:", resultado_treino)
    
    # Fazer previsões
    if resultado_treino['status'] == 'sucesso':
        previsoes = modelo.prever(dados_exemplo, 30)
        print("Previsões:", previsoes)
        
        # Mostrar importância das features
        importancia = modelo.obter_importancia_features()
        print("Importância das features:", importancia)
