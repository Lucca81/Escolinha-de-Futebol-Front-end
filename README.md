Entendido\! Fiz o ajuste no README para refletir o uso de `Fetch` (em vez de Axios) e `CSS` puro para estilização.

-----

# Gestão de Alunos - Frontend (React) ⚽

Este é o projeto frontend para o sistema de Gerenciamento de Alunos e Pagamentos, desenvolvido em React. Ele serve como interface de usuário para consumir a [API de Gestão da Escolinha (Backend)](https://www.google.com/search?q=https://github.com/seulink/gestao-escolinha-backend).

## 🚀 Sobre o Projeto

A interface permite que o administrador (ou usuário) do sistema realize as operações básicas de gerenciamento de alunos, como cadastrar, listar e atualizar informações, além de registrar e consultar pagamentos associados a cada aluno.

-----

## 🛠️ Tecnologias Principais

  * **React**: Biblioteca principal para a construção da interface.
  * **React Router DOM**: Para gerenciamento de rotas (ex: /alunos, /pagamentos, /cadastrar-aluno).
  * **Fetch API**: API nativa do navegador para realizar requisições HTTP para o backend.
  * **CSS Módulo**: (Ou CSS puro) Para estilização dos componentes.

-----

## ✨ Funcionalidades

  * ✅ **Gerenciamento de Alunos**:
      * Formulário para cadastrar novos alunos.
      * Página para listar todos os alunos cadastrados.
      * (Opcional) Funcionalidades para editar e excluir alunos.
  * ✅ **Gerenciamento de Pagamentos**:
      * Formulário para registrar um novo pagamento (associado a um aluno).
      * Página para visualizar o histórico de pagamentos de um aluno específico.



-----

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

  * [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
  * [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
  * A **API Backend de Alunos/Pagamentos** deve estar rodando (por padrão, em `http://localhost:8080`).

### Rodando a Aplicação

1.  **Clone o repositório:**

    ```bash
    git clone https://seurepositorio.com/gestao-escolinha-frontend.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd gestao-escolinha-frontend
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione a URL da sua API backend:

    ```env
    # URL base da sua API Spring Boot
    REACT_APP_API_URL=http://localhost:8080
    ```

    *(**Nota:** O React requer o prefixo `REACT_APP_` para que a variável seja lida no código).*

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    # ou
    yarn start
    ```

6.  Pronto\! A aplicação estará rodando em `http://localhost:3000`.

-----

## 🔌 Conexão com a API

Esta aplicação foi construída para consumir os endpoints da API de Alunos e Pagamentos usando a **Fetch API**. Todas as requisições (como `GET /api/alunos` ou `POST /api/pagamentos`) são feitas para o endereço configurado no arquivo `.env` (`http://localhost:8080`).

-----

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

  * **`npm start`**: Inicia a aplicação em modo de desenvolvimento.
  * **`npm test`**: Executa os testes (se configurados).
  * **`npm run build`**: Gera a versão de produção da aplicação na pasta `build`, pronta para deploy.

-----
