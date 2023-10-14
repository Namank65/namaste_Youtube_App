import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import store from './utils/ReduxStore';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ],

  },
])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
