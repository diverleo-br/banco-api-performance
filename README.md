
# Banco API Performance

Este repositório contém testes de performance para a API do Banco, utilizando JavaScript e k6, uma poderosa ferramenta para testes de carga e performance em aplicações.

## Introdução

Este projeto tem como objetivo realizar testes de performance em uma API utilizando o k6. Os testes são realizados com diferentes cenários, simulando múltiplos usuários para avaliar a capacidade de carga e a performance da API. O k6 é configurado para rodar os testes e gerar relatórios detalhados para análise.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem de programação utilizada para escrever os scripts de testes de performance.
- **k6**: Ferramenta de código aberto para testes de carga e performance em APIs. O k6 simula tráfego de rede e coleta métricas sobre a performance da aplicação.
- **Git**: Sistema de controle de versões utilizado para gerenciar o repositório.

## Estrutura do Repositório

O repositório possui a seguinte estrutura:

```
banco-api-performance/
├── fixtures/             # Dados de entrada para testes(ex: users, paylads)
├── helpers/              # Funções utilitarias reutilizaveis para interação com API
├── tests/                # Casos de teste organizados por módulo API
├── utils/                # Funções utilitarias reutilizaveis
|── config/               # Arquivo de configuração de variaveis de ambiente
└── .env                  # Variáveis de ambiente para configuração do ambiente de execução
```

### Objetivo de Cada Grupo de Arquivos

- **README.md**: Este arquivo contém as instruções de como usar o repositório, executar os testes e interpretar os resultados.
- **fixtures/**: Dados de entrada para testes(ex: users, paylads)
- **helpers/**: Funções utilitarias reutilizaveis para interação com API
- **tests/**: Casos de teste organizados por módulo API
- **utils/**: Funções utilitarias reutilizaveis
- **config/**: Arquivo de configuração de variaveis de ambiente
- **env/**: Variáveis de ambiente para configuração do ambiente de execução

## Modo de Instalação

Para configurar e executar o projeto, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/diverleo-br/banco-api-performance.git
   cd banco-api-performance
   ```

2. **Instale as dependências**:

   O k6 deve ser instalado para executar os testes de carga. Se você não tem o k6 instalado, pode seguir os seguintes passos para instalar:

   - **Para usuários do macOS**:
     ```bash
     brew install k6
     ```

   - **Para usuários do Windows**:
     Baixe o instalador no [site oficial do k6](https://k6.io/docs/getting-started/).

   - **Para usuários do Linux**:
     Siga a documentação do k6 para a instalação: https://k6.io/docs/getting-started/

3. **Configure a variável de ambiente `"baseURL": "http://localhost:3000"`**:

   Crie um arquivo `.env` ou exporte diretamente no terminal a variável de ambiente que define a URL da API que será testada:

   ```bash
   export BASE_URL="https://sua-api-url.com"
   ```

## Modo de Execução do Projeto

Para rodar os testes de performance com o k6, utilize o seguinte comando:

```bash
k6 run script/load-test.js
```

### Execução com Relatório em Tempo Real

Se você deseja acompanhar o relatório de performance em tempo real enquanto o k6 está rodando, utilize as variáveis de ambiente para ativar o dashboard web e exportar o relatório em HTML:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=reports/html-report.html k6 run script/load-test.js
```

Essa configuração fará o seguinte:
- **K6_WEB_DASHBOARD=true**: Ativa o dashboard em tempo real, permitindo visualizar as métricas enquanto o teste está em execução.
- **K6_WEB_DASHBOARD_EXPORT=reports/html-report.html**: Exporte o relatório final em formato HTML para o diretório `reports/`.

Após a execução do teste, o arquivo HTML estará disponível em `reports/html-report.html`, onde você poderá visualizar o relatório completo.

---

**Nota**: Certifique-se de que todas as variáveis de ambiente, como `BASE_URL`, estejam corretamente configuradas antes de rodar os testes, para garantir que os resultados sejam válidos.

Para mais detalhes sobre como usar o k6, consulte a [documentação oficial do k6](https://k6.io/docs/).
