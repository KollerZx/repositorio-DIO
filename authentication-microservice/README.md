# Microserviço de Autenticação

Esse projeto visa implementar um microserviço de autenticação para endpoints de uma API, utilizando <a href="https://jwt.io/libraries" >JWT</a> para geração do Token

## Composição do Projeto

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate

## 🛠️ Construído com

* <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
* <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
* <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
* <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/>

## 📌 Implementações Futuras

Isolar a aplicação em um container docker.
