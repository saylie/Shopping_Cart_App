import { Provider } from 'react-redux';
import './App.css';
import ShoppingApp from './Components/Wrap_Components/ShoppingApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2 className='AppTitle'>Shopping Cart Application</h2>
        <ShoppingApp/>
      </div>
    </Provider>
  );
}

export default App;
