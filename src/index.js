import './styles.css'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { asyncIncrement, decrement, increment } from './redux/actions'
import thunk from 'redux-thunk'

const themeBtn = document.querySelector('#theme'),
    addBtn = document.querySelector('#add'),
    subBtn = document.querySelector('#sub'),
    asyncBtn = document.querySelector('#async'),
    counter = document.querySelector('#counter')

const store = createStore(rootReducer, 0, applyMiddleware(thunk))

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

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})
