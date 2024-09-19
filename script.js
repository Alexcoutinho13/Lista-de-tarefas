//Eventos
let input = document.querySelector('#input-texto')
let botao = document.querySelector('.head button')
let ul = document.querySelector('.minha-lista')
let alerta = document.querySelector('.alerta')
let alertaClose = document.querySelector('.alerta i')
//Funções

function addTarefa() {
    let newLi = document.createElement('li')
    newLi.innerHTML = `<div class="icon" style="color: rgba(0, 128, 0, 0.497);">
        <i class="fa fa-check-circle"></i>
    </div>
    <div class="tarefa">
        <p>${input.value}</p>
    </div>
    <div class="icon" style="color: rgba(255, 0, 0, 0.478);">
        <i class="fa fa-trash"></i>
    </div>`
    if (input.value != '') {
        ul.appendChild(newLi)
    } else {
        alerta.style.display = "flex"
    }


    input.value = ''

}


function fecharAlerta() {
            alerta.style.display = "none"
}


botao.addEventListener('click', addTarefa)

alertaClose.addEventListener('click', fecharAlerta)

