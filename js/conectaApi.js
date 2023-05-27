async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const convertido = await conexao.json();
    
    return convertido;
}

export const conectaApi = {
    listaVideos
};