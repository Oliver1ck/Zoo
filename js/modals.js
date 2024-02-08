const callback = document.querySelector('.header__up-button')
const modal = document.querySelector('.modal__wrap')
const callbackForm = document.querySelector('.callback')
const cross = document.querySelectorAll('.cross')

callback.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    modal.classList.add('modal__active')
    callbackForm.classList.add('modal__active')
})

cross.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.remove('modal__active')
        item.parentElement.parentElement.classList.remove('modal__active')
        document.body.style.overflow = 'auto'
    })
})