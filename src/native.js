import './styles.css'

const themeBtn = document.querySelector('#theme'),
    addBtn = document.querySelector('#add'),
    subBtn = document.querySelector('#sub'),
    asyncBtn = document.querySelector('#async'),
    counter = document.querySelector('#counter');

let state = 0

const render = () => {
    counter.textContent = state.toString()
}

render()

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})