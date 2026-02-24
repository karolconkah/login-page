Login e Cadastro - Angular 17

Sobre o projeto

Aplicação frontend desenvolvida com Angular 17 utilizando componentes standalone e Reactive Forms.

O projeto implementa telas de login e cadastro com validação de formulário e organização modular, com foco em boas práticas do Angular moderno.

Desenvolvido para prática de estruturação de aplicações frontend e organização de código.

Tecnologias utilizadas

Angular 17

TypeScript

Reactive Forms

Angular Router

Standalone Components

npm

Funcionalidades

Tela de login

Tela de cadastro

Validação de campos obrigatórios

Validação de e-mail

Estrutura modular com componentes reutilizáveis

Organização por layout e páginas

Como rodar o projeto
Pré-requisitos

Node.js instalado

Angular CLI instalada

npm install -g @angular/cli
Instalar dependências
npm install
Rodar aplicação
ng serve

Aplicação disponível em:

http://localhost:4200

Este projeto foi integrado a um backend disponível como backend-login-page desenvolvido em Java com Spring Boot.

Em produção 

Aplicação fullstack de autenticação desenvolvida com Angular no frontend, Spring Boot no backend e PostgreSQL (Supabase) como banco de dados.
Deploy realizado com Vercel (frontend) e Render (backend).

Deploy

Frontend:
https://login-page-gold-three.vercel.app

Backend:
https://backend-login-page-abnx.onrender.com

Funcionalidades

Cadastro de usuário

Login com autenticação JWT

Proteção de rota (/user) com AuthGuard

Persistência de sessão

Tecnologias

Frontend

Angular

Reactive Forms

Angular Router

Auth Guard

HttpClient

Autenticação

O token JWT é armazenado no sessionStorage e validado pelo AuthGuard para controle de acesso às rotas protegidas.

Autora

Karoline Vieira Neves
