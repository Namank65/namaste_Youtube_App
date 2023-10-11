import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './utils/ReduxStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
