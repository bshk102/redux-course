import './styles.css'
import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'

const themeBtn = document.querySelector('#theme'),
    addBtn = document.querySelector('#add'),
    subBtn = document.querySelector('#sub'),
    asyncBtn = document.querySelector('#async'),
    counter = document.querySelector('#counter');

const store = createStore(rootReducer, 0)

store.subscribe(() => {
    counter.textContent = store.getState()
})

store.dispatch({type: 'INIT_APPLICATION'})

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

