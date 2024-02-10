const callback = document.querySelector('.header__up-button')
const modal = document.querySelector('.modal__wrap')
const callbackForm = document.querySelector('.callback')
const cross = document.querySelectorAll('.cross')
const buyOneClick = document.querySelector('.buy__one-click')
const sliderButton = document.querySelectorAll('.slider__item-btn')

modal.addEventListener('click', (e) => {
    if(e.target !== e.currentTarget) return
    else {
        e.target.children[0].classList.remove('modal__active')
        e.target.classList.remove('modal__active')
    }
})

callback.addEventListener('click', () => {
    document.body.style.overflow = 'hidden'
    modal.classList.add('modal__active')
    callbackForm.classList.add('modal__active')
})

cross.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.remove('modal__active')
        item.parentElement.parentElement.classList.remove('modal__active')
        console.log(item.parentElement.parentElement);
        document.body.style.overflow = 'auto'
    })
})

sliderButton.forEach(item => {
    item.addEventListener('click', () => {
        document.body.style.overflow = 'hidden'
        modal.classList.add('modal__active')
        buyOneClick.classList.add('modal__active')
    })
})