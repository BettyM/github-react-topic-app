import './styles/index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //Middleware to make async actions in redux store
import reducers from './store/reducers'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

const store = createStore(reducers, {}, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store} render>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
