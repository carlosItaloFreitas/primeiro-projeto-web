let botaoFechar = document.getElementById('botao-toggle-fechar')
let botaoAbrir = document.getElementById('botao-toggler-abrir')
let menuToggler = document.getElementById('menu-toggle')
let overlay = document.getElementById('overlay-menu')

botaoAbrir.addEventListener('click', ()=>{
    menuToggler.classList.add('abrir-menu-toggler')
})

menuToggler.addEventListener('click', ()=>{
    menuToggler.classList.remove('abrir-menu-toggler')
})

botaoFechar.addEventListener('click', ()=>{
    menuToggler.classList.remove('abrir-menu-toggler')
})

overlay.addEventListener('click', ()=>{
    menuToggler.classList.remove('abrir-menu-toggler')
})