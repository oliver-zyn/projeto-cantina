let btnMobile = document.querySelector('#navbar--btnMobile')
let nav = document.querySelector('#navbar')

btnMobile.onclick = () => {
    nav.classList.toggle('active')
    btnMobile.classList.toggle('active')
}

window.onscroll = () => {
    nav.classList.remove('active')
}