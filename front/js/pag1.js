'use strict'

import { showCourse } from "../js/apiChamada"

const criarCard = (item) => {
    const div = document.createElement('div')
    div.classList.add('container-link')
    const img = document.createElement('img')
    img.src = item.icone

    const a = document.createElement('a')
    a.classList.add('link')
    a.textContent = item.sigla
    a.href = '../front/html/pag1.html'
    div.appendChild(a)
    div.appendChild(img)

    return div
}

const carregarCard = async () => {
    const dados = await showCourse()
    const container = document.getElementById('cursos')
    const criandoCards = dados.map(criarCard)
    container.replaceChildren(...criandoCards)
}

carregarCard()
    document.getElementById('cursos').addEventListener('click', (evento) => {
        localStorage.setItem('cursos', evento.target.textContent)
    })
