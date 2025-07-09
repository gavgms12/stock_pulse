import pandas as pd
import numpy as np
from prophet import Prophet
from datetime import datetime, timedelta
import json
from typing import List, Dict, Any
import warnings
warnings.filterwarnings('ignore')

class ProphetModel:
    def __init__(self, investimento_tipo: str = 'AÇÃO'):
        """
        Inicializa o modelo Prophet para previsão de investimentos.
        
        Args:
            investimento_tipo: Tipo do investimento ('AÇÃO', 'RENDA_FIXA', 'FUNDO')
        """
        self.investimento_tipo = investimento_tipo
        self.model = Prophet(
            daily_seasonality=True,
            weekly_seasonality=True,
            yearly_seasonality=True,
            changepoint_prior_scale=0.05,
            seasonality_prior_scale=10.0,
            holidays_prior_scale=10.0,
            seasonality_mode='multiplicative'
        )
        self.is_fitted = False
        
    def preparar_dados(self, dados_historicos: List[Dict[str, Any]]) -> pd.DataFrame:
        """
        Prepara os dados históricos para o modelo Prophet.
        
        Args:
            dados_historicos: Lista com dados históricos contendo 'data' e 'valor'
            
        Returns:
            DataFrame formatado para Prophet (colunas 'ds' e 'y')
        """
        df = pd.DataFrame(dados_historicos)
        
        # Converter para formato Prophet
        df_prophet = pd.DataFrame({
            'ds': pd.to_datetime(df['data']),
            'y': df['valor'].astype(float)
        })
        
        # Remover valores nulos
        df_prophet = df_prophet.dropna()
        
        # Ordenar por data
        df_prophet = df_prophet.sort_values('ds').reset_index(drop=True)
        
        return df_prophet
    
    def treinar(self, dados_historicos: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Treina o modelo Prophet com os dados históricos.
        
        Args:
            dados_historicos: Lista com dados históricos
            
        Returns:
            Métricas de treinamento
        """
        try:
            # Preparar dados
            df = self.preparar_dados(dados_historicos)
            
            if len(df) < 30:  # Mínimo de dados para treinar
                raise ValueError("Dados insuficientes para treinamento (mínimo 30 registros)")
            
            # Configurar sazonalidades específicas por tipo de investimento
            if self.investimento_tipo == 'AÇÃO':
                self.model.add_seasonality(name='monthly', period=30.5, fourier_order=5)
                self.model.add_seasonality(name='quarterly', period=91.25, fourier_order=3)
            elif self.investimento_tipo == 'RENDA_FIXA':
                self.model.add_seasonality(name='monthly', period=30.5, fourier_order=3)
            
            # Treinar modelo
            self.model.fit(df)
            self.is_fitted = True
            
            # Calcular métricas básicas
            forecast = self.model.predict(df)
            mae = np.mean(np.abs(df['y'] - forecast['yhat']))
            mape = np.mean(np.abs((df['y'] - forecast['yhat']) / df['y'])) * 100
            
            return {
                'status': 'sucesso',
                'mae': mae,
                'mape': mape,
                'registros_treinamento': len(df),
                'data_ultimo_treino': datetime.now().isoformat()
            }
            
        except Exception as e:
            return {
                'status': 'erro',
                'erro': str(e)
            }
    
    def prever(self, dias_futuro: int = 30) -> Dict[str, Any]:
        """
        Realiza previsões para os próximos dias.
        
        Args:
            dias_futuro: Número de dias para prever
            
        Returns:
            Previsões com intervalos de confiança
        """
        if not self.is_fitted:
            return {
                'status': 'erro',
                'erro': 'Modelo não foi treinado'
            }
        
        try:
            # Criar datas futuras
            future = self.model.make_future_dataframe(periods=dias_futuro)
            
            # Fazer previsões
            forecast = self.model.predict(future)
            
            # Extrair apenas as previsões futuras
            forecast_future = forecast.tail(dias_futuro)
            
            # Formatar resultado
            previsoes = []
            for _, row in forecast_future.iterrows():
                previsoes.append({
                    'data': row['ds'].isoformat(),
                    'valor_previsto': float(row['yhat']),
                    'limite_inferior': float(row['yhat_lower']),
                    'limite_superior': float(row['yhat_upper']),
                    'tendencia': float(row['trend'])
                })
            
            return {
                'status': 'sucesso',
                'previsoes': previsoes,
                'periodo_previsao': dias_futuro,
                'data_previsao': datetime.now().isoformat()
            }
            
        except Exception as e:
            return {
                'status': 'erro',
                'erro': str(e)
            }
    
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
            # Preparar dados de teste
            df_teste = self.preparar_dados(dados_teste)
            
            # Fazer previsões
            forecast = self.model.predict(df_teste[['ds']])
            
            # Calcular métricas
            y_true = df_teste['y'].values
            y_pred = forecast['yhat'].values
            
            mae = np.mean(np.abs(y_true - y_pred))
            mse = np.mean((y_true - y_pred) ** 2)
            rmse = np.sqrt(mse)
            mape = np.mean(np.abs((y_true - y_pred) / y_true)) * 100
            
            # Calcular R²
            ss_res = np.sum((y_true - y_pred) ** 2)
            ss_tot = np.sum((y_true - np.mean(y_true)) ** 2)
            r2 = 1 - (ss_res / ss_tot)
            
            return {
                'status': 'sucesso',
                'mae': mae,
                'mse': mse,
                'rmse': rmse,
                'mape': mape,
                'r2': r2,
                'registros_teste': len(df_teste)
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
            import pickle
            with open(caminho, 'wb') as f:
                pickle.dump(self.model, f)
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
            import pickle
            with open(caminho, 'rb') as f:
                self.model = pickle.load(f)
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
        # ... mais dados
    ]
    
    # Criar e treinar modelo
    modelo = ProphetModel('AÇÃO')
    resultado_treino = modelo.treinar(dados_exemplo)
    print("Resultado do treinamento:", resultado_treino)
    
    # Fazer previsões
    if resultado_treino['status'] == 'sucesso':
        previsoes = modelo.prever(30)
        print("Previsões:", previsoes)
