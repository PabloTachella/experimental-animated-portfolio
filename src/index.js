import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './routes/App'

const initialState = {
    "startAnimation": false,
    "projects": [
        {
            "id": '1',
            "title": 'Calculator app',
            "screenshot": `./src/assets/static/images/calculator.png`
        },
        {
            "id": '2',
            "title": 'Lazy loading',
            "screenshot": `./src/assets/static/images/lazyloading.jpg`
        },
        {
            "id": '3',
            "title": 'Calculator app',
            "screenshot": `./src/assets/static/images/calculator.png`
        },
        {
            "id": '4',
            "title": 'Lazy loading',
            "screenshot": `./src/assets/static/images/lazyloading.jpg`
        },
        {
            "id": '5',
            "title": 'Calculator app',
            "screenshot": `./src/assets/static/images/calculator.png`
        },
        {
            "id": '6',
            "title": 'Lazy loading',
            "screenshot": `./src/assets/static/images/lazyloading.jpg`
        },
    ]
}
const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)
