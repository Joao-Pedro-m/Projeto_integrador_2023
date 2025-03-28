# Projeto Integrador 2023

## Objetivo

O Projeto Integrador 2023 tem como objetivo desenvolver uma aplicação web moderna que integra diversas tecnologias para oferecer uma interface interativa, escalável e de fácil implantação. Este projeto reúne conhecimentos em front-end, back-end, banco de dados e containerização, proporcionando uma solução robusta para cenários reais.

## Descrição

Esta aplicação web foi desenvolvida utilizando as mais recentes tecnologias do mercado. O front-end é construído com React e gerenciado pelo Vite, proporcionando um ambiente de desenvolvimento ágil e otimizado. A estilização é realizada com Tailwind CSS e PostCSS, garantindo uma interface visual moderna e responsiva. No back-end, o projeto conta com um banco de dados MySQL, e a containerização é facilitada pelo Docker e Docker Compose, permitindo uma implantação simplificada em diferentes ambientes.

## Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface do usuário.
- **Vite** – Ferramenta de build e desenvolvimento para aplicações web.
- **Tailwind CSS** – Framework de utilitários CSS para estilização.
- **PostCSS** – Processador de CSS.
- **TypeScript** – Superset do JavaScript que adiciona tipagem estática (configurado via `tsconfig.json` e `tsconfig.node.json`).
- **MySQL** – Sistema de gerenciamento de banco de dados relacional.
- **Docker & Docker Compose** – Ferramentas para containerização e orquestração de serviços.

## Estrutura do Projeto

- **.idea/**  
  Configurações da IDE JetBrains.

- **.upm/**  
  Arquivos e configurações específicas de ferramentas ou gerenciadores de pacotes.

- **public/**  
  Armazena os arquivos estáticos acessíveis publicamente, como imagens, fontes e o template HTML.

- **src/**  
  Contém o código-fonte principal da aplicação:
  - **Components/** – Componentes React reutilizáveis.
  - **img/** – Recursos gráficos (imagens e ícones).
  - **App.jsx / App.css** – Estrutura e estilização principal da aplicação.
  - **Home.jsx** – Componente que representa a página inicial.
  - **index.jsx** – Ponto de entrada da aplicação React, onde o App é renderizado.

- **Banco Joao.sql**  
  Script SQL para criação e/ou população do banco de dados MySQL.

- **docker-compose.yml**  
  Configuração para orquestrar os contêineres, incluindo o serviço do banco de dados e, possivelmente, da aplicação.

- **dockerfile**  
  Instruções para construir uma imagem Docker personalizada para o projeto.

- **index.html**  
  Arquivo HTML principal que serve de template para a aplicação.

- **modelo bd pi2023.mwb**  
  Modelo do banco de dados, provavelmente criado com MySQL Workbench.

- **package.json / package-lock.json**  
  Gerenciam as dependências e scripts do projeto Node.js.

- **postcss.config.cjs**  
  Configuração do PostCSS para o processamento dos estilos.

- **tailwind.config.cjs**  
  Configuração do Tailwind CSS.

- **tsconfig.json / tsconfig.node.json**  
  Configurações do compilador TypeScript para o projeto.

- **vite.config.js**  
  Configuração para o Vite, facilitando o desenvolvimento e build da aplicação.

## Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional, para ambientes containerizados)
- [MySQL](https://www.mysql.com/) (para o gerenciamento do banco de dados localmente ou via container)

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Joao-Pedro-m/Projeto_integrador_2023.git
   cd Projeto_integrador_2023

2. Instale as dependências:

npm install


3. Configure o Banco de Dados:

Utilize o arquivo Banco Joao.sql para criar e popular o banco de dados MySQL.

Caso opte por usar Docker, verifique as configurações do docker-compose.yml para subir o contêiner do MySQL.



4. Rodar a Aplicação:

Modo Desenvolvimento:

npm run dev

A aplicação geralmente ficará disponível em http://localhost:3000 ou em outra porta definida nas configurações.

Utilizando Docker:

Inicie o ambiente com Docker Compose:

docker-compose up --build

A aplicação e os serviços (como o banco de dados) serão iniciados conforme as configurações definidas.




5. Acessar a Aplicação:

Abra seu navegador e acesse a URL onde a aplicação está rodando (por exemplo, http://localhost:3000).



Contribuição

Contribuições são bem-vindas! Para colaborar:

1. Faça um fork deste repositório.


2. Crie uma branch para sua feature:

git checkout -b minha-feature


3. Realize suas alterações e faça commit:

git commit -m "Minha nova feature"


4. Envie para sua branch:

git push origin minha-feature


5. Abra um Pull Request detalhando as alterações realizadas.



Licença

Este projeto está licenciado sob a MIT License.



