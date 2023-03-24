async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}
async function criaVideo() {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers:{
            "content-type":"application/json"
        }
    });
    
}
export const conectaApi = {
    listaVideos
}