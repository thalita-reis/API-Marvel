// API
const apiKey = '4b6088749d91207de564df208e741a87';  
const privateKey = '3c29d4ea5ba871c14652a9dce4572e5f538a4990'; 
const baseUrl = 'https://gateway.marvel.com/v1/public/comics';

// Data/hora para autenticação
const timestamp = new Date().getTime(); 
const hash = CryptoJS.MD5(timestamp + privateKey + apiKey).toString(); 

// Buscar quadrinhos da API
async function fetchComics() {
    const url = `${baseUrl}?apikey=${apiKey}&ts=${timestamp}&hash=${hash}&limit=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("API Response:", data);

        if (data.code === 200) {
            const comicsList = document.getElementById('comics-list');

            if (data.data.results.length === 0) {
                document.getElementById('error-message').textContent = "Nenhum quadrinho encontrado.";
                return;
            }

            data.data.results.forEach(comic => {
                const comicElement = document.createElement('div');
                comicElement.classList.add('comic-item');

                // URL da imagem correta usei (300x450px)
                let imageUrl = `${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`;

                // É p/ Corrigir imagens HTTP para HTTPS
                if (imageUrl.startsWith("http:")) {
                    imageUrl = imageUrl.replace("http:", "https:");
                }

                comicElement.innerHTML = `
                    <img src="${imageUrl}" alt="${comic.title}">
                    <h3>${comic.title}</h3>
                    <p>${comic.description || 'Descrição não disponível.'}</p>
                    <a href="${comic.urls[0].url}" target="_blank">Saiba mais</a>
                `;

                comicsList.appendChild(comicElement);
            });
        } else {
            console.error('Erro na API:', data.message);
            document.getElementById('error-message').textContent = "Erro ao carregar quadrinhos.";
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        document.getElementById('error-message').textContent = "Erro ao conectar com a API.";
    }
}

// Carregar a página
fetchComics();
