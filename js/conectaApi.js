const videos_db = "http://localhost:3000/videos";

async function listaVideos() {
    const conexao = await fetch(videos_db);
    const convertido = await conexao.json();
    
    return convertido;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(videos_db, {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o video");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`${videos_db}?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
};