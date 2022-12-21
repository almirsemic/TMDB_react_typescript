import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(
  allReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
