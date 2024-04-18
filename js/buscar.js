async function buscar(){
    console.log("Passei por aqui!")
    var resposta = await fetch("https://660f44b3356b87a55c510e31.mockapi.io/agendas")
    console.log("Resposta: ", resposta)
    if(resposta.ok){
        var dados = await resposta.json()
        console.log("Dados: ", dados);
        dados.forEach(element => {
            imprimir(element.dataJogo, element.nome, element.descricao, element.gamers, element.urlAssistir, element.urlImagem, element.id);
        });
    }
}

buscar()

function imprimir(data, nome, descricao, gamers, urlAssistir, urlImagem, id){
    console.log("Passei pela impressão!")
    var games = document.getElementById("cards_games")
    games.innerHTML += `
    <div class="cardItem">
                <div class="dataGame"> 
                    <img src="../imagens/calendar-solid.svg" alt=""> ${data}
                </div>
                <img class="img-background" src="${urlImagem}" alt="">
                <div class="descricao">
                    <p> <strong>${nome}</strong> </p>
                    <p> ${descricao} </p>
                    <p><strong>Gamers: </strong></p>

                    <div class="gamers">
                        ${buscaGamers(gamers)}
                    </div>

                  
                </div>  
                <div class="assistir">
                        <a class="assistirItem"> <img src="${urlAssistir}" alt=""> Assistir </a>
                </div>
            </div>`
        console.log(data, nome, descricao, urlImagem)
    
}

function buscaGamers(gamers){
   var games = document.getElementsByClassName("gamers")
    gamers.forEach((element => {
        games.innerHTML += `
        <div class="gamerItem">${element}</div>
        `
    }))
}