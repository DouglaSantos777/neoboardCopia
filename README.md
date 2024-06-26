# NeoBoard - Dashboard Empresarial

[![Versão](https://img.shields.io/github/v/release/LiedsonLB/neoboard)](https://github.com/LiedsonLB/neoboard/releases)
[![Forks](https://img.shields.io/github/forks/LiedsonLB/neoboard)](https://github.com/LiedsonLB/neoboard/network/members)
[![Contribuidores](https://img.shields.io/github/contributors/LiedsonLB/neoboard)](https://github.com/LiedsonLB/neoboard/graphs/contributors)
[![Licença: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Pull Requests Abertos](https://img.shields.io/github/issues-pr/LiedsonLB/neoboard)](https://github.com/LiedsonLB/neoboard/pulls)
[![Última Atualização](https://img.shields.io/github/last-commit/LiedsonLB/neoboard)](https://github.com/LiedsonLB/neoboard/commits/master)

![NeoBoard](./public/img/readme_img/neoboard_logo.png)

NeoBoard é uma plataforma de dashboard empresarial projetada para gerenciar informações de forma mais eficiente. Com interface e funcionalidades intuitivas, esta ferramenta auxilia empresas a otimizarem o processo de tomada de decisão, com organização e estratégia.

## Design

- **Figma:** [NeoBoard Figma](https://www.figma.com/file/FZsYI4I22unJ1Wg7HDTk96/NeoBoard?type=design&node-id=0-1&mode=design&t=tx0rR3XEPm7Oiu2d-0)

## Funcionalidades

- **Interface:**
  - Área que recebe relatório das vendas em Excel para importação de dados

- **Home:**
  - Vendas, clientes, despesas e cálculo de lucro (geral)
  - Gráficos: linhas (capital de período), pizza (venda dos produtos), colunas (vendas das regiões), cards (porcentagem de comparação com o mês anterior), ranking (produto e região), cotações, footer

- **Regiões:**
  - Vendas, clientes, despesas e cálculo de lucro

- **Produtos:**
  - Informação do produto (nome, categoria, descrição, valor)
  - Números de vendas, capital bruto
  - Informações dos segmentos dos produtos (capital bruto, porcentagem do produto)
  - Histórico de vendas do mês, porcentagem de comparação com o mês anterior

- **Pagamentos:**
  - Gráfico geral das formas de pagamento
  - Detalhes para cartões (crédito e débito), PIX, boleto, etc.

## Testes

- Teste de carregamento de componentes HTML
- Teste de tipo de documento
- Envio de dados normal
- Testes funcionais
- Testes de banco e API
- Testes de sistema

## Extras

- Importação por arquivo

## NeoBoard Designer 2.0

### Produto, Funcionários e Região

- Gráfico de radar
- Substituição do azul alternado nos produtos por cinza e do azul escuro no header de títulos da lista de produtos
- Aumentar a height dos produtos listas

### Pagamentos

- Gráfico de pizza nos pagamentos

### Relatório

- Confirmações de envio diário dos relatórios
- Botão gerador de planilha vazia

## Backend NeoBoard

### Login e Autenticação

- Autenticação Auth Google e Email com Firebase
- Salvamento de sessão em localstorage
- Criptografia Bcrypt
- Sistema de confirmação de troca de senha

### Gerenciamento de Dados

- Mapa do banco de dados e interações
- Rota de informações (routers.js)
- Criar rotas da API e integração do banco PostgreSQL (server.js)
- Docker para rodar o PostgreSQL (docker-compose.yml)
- Classes de dados no (/modals)
- Linguagem Typescript

### Relatório

- Biblioteca para ler planilhas (.csv, .txt...)
- Envio de venda direto para o banco

### Gráficos

- [Chart.js](https://www.chartjs.org/)

# Conhecimentos utilizados:
<div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content:center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" height="30" width="40">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" height="30" width="40">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" alt="typescript" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain-wordmark.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" height="30" width="40">        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" height="30" width="40">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" height="30" width="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Git" height="30" width="40"/>     
</div>

## Equipe

- [Liedson Barros 👑(Scrum Master)](https://github.com/LiedsonLB)
- [Pedro Lucas](https://github.com/PL251431)
- [Kaio Simeão](https://github.com/KaioSimeao)
- [Francisco Douglas](https://github.com/DouglaSantos777)

## Lista de Presença das Reuniões

[Google Sheets](https://docs.google.com/spreadsheets/d/1aLPvppBixNkQL8woJ6ycX3q-zcAxLUGQJkBnxcQIC94/edit?usp=sharing) - Reunião diária às 21h

## Repositório NeoBoard

[GitHub Repository](https://github.com/LiedsonLB/neoboard)

## Kanban

[Trello Kanban](https://trello.com/invite/b/icO9d5CG/ATTI88cb3da7dc14ce4b89a11b42a222a7bd37DDFF10/kanban-quadro-modelo)

## Releases

- Release v1.0 ✅
- Release v2.0 ✅
- Release v2.0.1 ✅
- Release v3.0 ✅

## Imagens do Projeto

### Dashboard Geral
![Dashboard Geral](./public/img/readme_img/homeImg.png)
![Gráficos Interativos](./public/img/readme_img/homegraficsImg.png)


### Dashboard Produtos
![Gráficos Interativos](./public/img/readme_img/productsImg.png)

### Dashboard Regiões
![Gráficos Interativos](./public/img/readme_img/regionsImg.png)

### Dashboard Funcionarios
![Gráficos Interativos](./public/img/readme_img/staffsImg.png)

### Dashboard Relatorio
![Gráficos Interativos](./public/img/readme_img/relatorioImg.png)

### Dashboard Fala Conosco
![Gráficos Interativos](./public/img/readme_img/contatusImg.png)

### Interface de Login e Cadastro 
![Dashboard Geral](./public/img/readme_img/loginImg.png)
![Dashboard Geral](./public/img/readme_img/cadasterImg.png)

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
