import './styles.css'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { decrement, increment } from './redux/actions';

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
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

