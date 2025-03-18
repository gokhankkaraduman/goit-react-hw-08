import Header from '../Layout/Header/Header.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from '../Background/Background.jsx';
import { ToastContainer } from 'react-toastify';

import HomePageLoading from '../HomePageLoading/HomePageLoading.jsx';

import Home from '../../pages/HomePage/Home.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import PrivateRoute from '../../router/Private/PrivateRoute.jsx';
import RestrictedRoute from '../../router/Restricted/RestrictedRoute.jsx';

function App() {
  return (

        <Background>
          <div className="main">
            <Header />
            <Routes>
              {/* Giriş yapmamış kullanıcılar için LoginPage ve RegisterPage */}
              <Route path="/login" element={<RestrictedRoute Component={<LoginPage />} to="/" />} />
              <Route path="/register" element={<RestrictedRoute Component={<RegisterPage />} to="/" />} />
              <Route path="/" element={<Home />} /> 
              {/* Giriş yapmış kullanıcılar için Contacts */}
            </Routes>
          </div>
          <ToastContainer />
        </Background>

  );
}

export default App;
