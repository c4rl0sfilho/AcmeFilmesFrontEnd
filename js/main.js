'use strict'

import {getFilmes, getFilmeByID} from './filmes.js'

function criarCard(filme){
    const card = document.createElement('div')
    const tituloFilme = document.createElement('h1')
    tituloFilme.textContent = filme.nome
    card.appendChild(tituloFilme)

    return card
}



async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach (filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}
//preencherContainer()