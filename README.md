# Desafio: Exibição dos Personagens da Marvel

## Introdução

Utilizamos este desafio para avaliar a qualidade do seu código, arquitetura, a forma que você organiza os seus pensamentos dentro do repositório e muitas outras coisas. Por isso, sinta-se à vontade e dê o seu melhor!

Neste desafio, você irá desenvolver um aplicativo que deve mostrar os **personagens da Marvel**. Utilizando **HTML**, **CSS** e **JavaScript**, o objetivo é consumir dados de uma API e exibir uma lista de personagens com as informações necessárias, de maneira intuitiva e bem estruturada.

## Requisitos

Os requisitos básicos serão usados para avaliar como você lida com os seguintes itens. A falta de qualquer um desses requisitos comprometerá a sua avaliação final:

- **Consumo de API** para popular a lista de personagens.
- **Exibição das imagens, nome e descrição** dos personagens.
- **Scroll infinito**: Carregar mais personagens à medida que o usuário rolar a página.
- **Design responsivo** utilizando CSS para garantir que o aplicativo seja bem apresentado em diversos dispositivos.
- **Boa arquitetura de código**: Manter o código organizado e limpo para fácil manutenção e extensibilidade.

## Fases do Projeto

### Fase 1: API - Ler a Documentação e Implementar a Chamada da API

A API que deverá ser utilizada para popular as listas de personagens é a **Marvel API**. O endpoint relevante para este desafio é `/v1/public/characters`. A partir dessa API, você deve realizar as requisições para obter os dados dos personagens, como **nome**, **descrição** e **imagens**.

### Fase 2: Ler Dados e Persistir Localmente

Aplique um mecanismo para armazenar os dados localmente para garantir que a interface possa ser carregada rapidamente, sem necessidade de novas requisições a cada acesso. Pode-se utilizar o `localStorage` ou outras abordagens simples em JavaScript.

### Fase 3: Tela de Lista

Crie uma tela que exibirá a lista de personagens. A tela deve ser responsiva e exibir cada personagem com as informações mais relevantes, como o **nome**, **descrição curta** e a **imagem** (a partir das URLs fornecidas pela API).

### Fase 4: Tela de Detalhes

Quando o usuário clicar em um personagem, ele será levado a uma tela com mais detalhes sobre aquele personagem, incluindo informações como **biografia completa**, **primeira aparição** e outros dados relevantes.

### Fase 5: Entrega

Ao finalizar, envie o desafio:

- Crie um **fork público** deste repositório.
- Siga o fluxo de desenvolvimento do **gitflow**.
- **Faça o pull request** para este repositório.
