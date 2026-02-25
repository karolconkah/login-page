Login Page Frontend

Aplicação frontend desenvolvida em Angular responsável pela interface de autenticação, consumo da API REST e controle de rotas protegidas.

Deploy em produção:
https://login-page-gold-three.vercel.app

Descrição

Interface de cadastro e login integrada a uma API Spring Boot.
Após autenticação, o usuário é redirecionado para uma rota protegida (/user), controlada por AuthGuard.

Funcionalidades

Cadastro de usuário

Login com autenticação JWT

Proteção de rota (/user)

Persistência de sessão via sessionStorage

Redirecionamento automático após autenticação

Tecnologias Utilizadas

Angular

TypeScript

Reactive Forms

Angular Router

Auth Guard

HttpClient

Integração com Backend

O frontend consome a API hospedada no Render:

https://backend-login-page-abnx.onrender.com

O token JWT retornado no login é armazenado no sessionStorage e utilizado para controle de acesso às rotas protegidas.

Como rodar localmente

Instalar dependências:

npm install

Executar a aplicação:

ng serve

Acessar:

http://localhost:4200
