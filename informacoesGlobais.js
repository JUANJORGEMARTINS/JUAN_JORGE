// informacoesGlobais.js

export const titulo = "Relatório das Redes Sociais";
export const autor = "Criado por Rãzão";
export const cores = {
    fundo: "#A5B68D",
    primaria: "#ECDFCC",
    secundaria: "#FCFAEE"
};

// URL da API
const linkRelatorio = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json";

// Função para obter dados globais do link
export async function obterDadosGlobais() {
    try {
        const resposta = await fetch(linkRelatorio);
        if (!resposta.ok) {
            throw new Error("Erro ao buscar dados");
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error("Erro ao obter dados globais:", erro);
        return null;
    }
}
