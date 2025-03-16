import Header from '../Layout/Header/Header.jsx';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Background from '../Background/Background.jsx';
import { Provider } from 'react-redux';
import store from '../../redux/store.js';
import { ToastContainer } from 'react-toastify';

import Home from '../../pages/HomePage/Home.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';



function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Background>
          <div className='main'>
            <Header className='header'/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes> 
          </div>
          <ToastContainer />
        </Background>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
