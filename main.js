// graficos/informa.js

import { obterDadosGlobais, titulo, obterCor } from './informacoesGlobais.js';

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("graficos-container");

    // Usando a função para obter os dados globais
    const dadosGlobais = await obterDadosGlobais();
    if (dadosGlobais) {
        // Exemplo: Exibir um dado específico
        const info = document.createElement("p");
        info.textContent = `Informação obtida: ${dadosGlobais.algumaInformacao}`; // Altere para a chave correta
        container.appendChild(info);
    }

    // Adicionando elementos com as cores globais
    const cabecalho = document.createElement("h2");
    cabecalho.textContent = titulo;
    cabecalho.style.color = obterCor("primaria");
    container.appendChild(cabecalho);
});
