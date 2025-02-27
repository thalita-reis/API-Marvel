// Usando dotenv para variáveis de ambiente
import 'dotenv/config'
const CryptoJS = require('crypto-js');

// Variáveis de configuração da API da Marvel
const apiKey = process.env.API_KEY; // Sua chave da API
const privateKey = process.env.PRIVATE_KEY; // Sua chave privada
const baseUrl = process.env.BASE_URL;  // URL da API
console.log('API Key:', apiKey);
console.log('Private Key:', privateKey);

// Função para gerar o hash de autenticação (MD5)
const generateAuthHash = () => {
    const timestamp = new Date().getTime(); // Captura a hora atual para o timestamp
    return CryptoJS.MD5(timestamp + privateKey + apiKey).toString(); // Gera o hash com MD5
};

// Variável global para contar os itens no carrinho
let cartItems = 0; // Inicializa o carrinho com 0 itens

// Função para atualizar a contagem do carrinho
const updateCartCount = () => {
    const cartCounter = document.getElementById('cart-count');
    cartCounter.innerText = cartItems; // Atualiza o número de itens no carrinho
    cartCounter.style.display = cartItems > 0 ? "inline-block" : "none"; // Exibe o contador apenas se for maior que 0
};

// Função para adicionar ao carrinho e atualizar a contagem
const addToCart = (comicTitle) => {
    cartItems++; // Incrementa o número de itens no carrinho
    alert(`${comicTitle} foi adicionado ao carrinho!`); // Exibe um alerta para o usuário
    updateCartCount(); // Atualiza a contagem no carrinho
};

// Função para renderizar os quadrinhos na página
const renderComics = (comics) => {
    const comicsList = document.getElementById('comics-list');
    comicsList.innerHTML = ''; // Limpa os quadrinhos antigos

    comics.forEach((comic) => {
        const comicElement = document.createElement('div');
        comicElement.classList.add('comic-item');
        
        const imageUrl = comic.thumbnail.path.replace("http:", "https:") + "/portrait_uncanny." + comic.thumbnail.extension;
        comicElement.innerHTML = `
            <img src="${imageUrl}" alt="${comic.title}">
            <h3>${comic.title}</h3>
            <p>${comic.description || 'Descrição não disponível.'}</p>
            <p><strong>$${comic.price}</strong></p>
            <button onclick="addToCart('${comic.title}')">Adicionar ao carrinho</button>
        `;
        comicsList.appendChild(comicElement);
    });
};

// Função para buscar quadrinhos da API da Marvel
const fetchComics = async () => {
    console.log('Buscando quadrinhos...');
    const url = `${baseUrl}?apikey=${apiKey}&ts=${new Date().getTime()}&hash=${generateAuthHash()}&limit=10`; // Constrói a URL da API com a chave da API

    try {
        const response = await fetch(url); // Faz a requisição para a API
        const data = await response.json(); // Converte a resposta para JSON

        if (data.code === 200 && data.data.results.length > 0) {
            renderComics(data.data.results); // Renderiza os quadrinhos
        } else {
            throw new Error("Nenhum quadrinho encontrado.");
        }
    } catch (error) {
        console.error('Erro ao buscar quadrinhos:', error);
        alert('Erro ao buscar quadrinhos.');
    }
};

// Carregar quadrinhos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount(); // Atualiza a contagem ao carregar a página
    fetchComics(); // Carrega os quadrinhos da API
});
