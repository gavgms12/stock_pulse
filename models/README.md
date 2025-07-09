# Modelos de IA para Previsão de Investimentos

Esta pasta contém os modelos de Machine Learning utilizados para prever valores de investimentos.

## Modelos Disponíveis

### 1. Prophet Model (`prophet_model.py`)
- **Uso**: Melhor para dados com sazonalidade clara
- **Características**: 
  - Trata automaticamente sazonalidades
  - Robusto a dados faltantes
  - Ideal para séries temporais com tendências
- **Tipos suportados**: Ações, Renda Fixa, Fundos

### 2. XGBoost Model (`xgboost_model.py`)
- **Uso**: Melhor para dados com muitas features técnicas
- **Características**:
  - Utiliza indicadores técnicos (RSI, Bollinger Bands, etc.)
  - Previsões sequenciais
  - Análise de importância das features
- **Tipos suportados**: Ações, Renda Fixa, Fundos

## Instalação

```bash
pip install -r requirements.txt
```

## Uso Básico

### Prophet
```python
from prophet_model import ProphetModel

# Criar modelo
modelo = ProphetModel('AÇÃO')

# Treinar
dados = [{'data': '2023-01-01', 'valor': 100.0}, ...]
resultado = modelo.treinar(dados)

# Prever
previsoes = modelo.prever(30)  # 30 dias
```

### XGBoost
```python
from xgboost_model import XGBoostModel

# Criar modelo
modelo = XGBoostModel('AÇÃO')

# Treinar
dados = [{'data': '2023-01-01', 'valor': 100.0}, ...]
resultado = modelo.treinar(dados)

# Prever
previsoes = modelo.prever(dados, 30)  # 30 dias
```

## Formato dos Dados

Os dados devem estar no formato:
```python
[
    {'data': '2023-01-01', 'valor': 100.0},
    {'data': '2023-01-02', 'valor': 102.5},
    # ...
]
```

## Características por Tipo de Investimento

### Ações
- Usa indicadores técnicos completos
- Considera volatilidade e momentum
- Sazonalidades mensal e trimestral

### Renda Fixa
- Parâmetros mais conservadores
- Foco em tendências de longo prazo
- Menor volatilidade esperada

### Fundos
- Configuração intermediária
- Balanceamento entre técnicos e fundamentais
- Considera diversificação
