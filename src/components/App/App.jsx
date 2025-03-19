import Header from '../Layout/Header/Header.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from '../Background/Background.jsx';
import { ToastContainer } from 'react-toastify';

import MainLoading from '../MainLoading/MainLoading.jsx';
import Footer from "../Footer/Footer.jsx"
import Home from '../../pages/HomePage/Home.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import PrivateRoute from '../../router/Private/PrivateRoute.jsx';
import RestrictedRoute from '../../router/Restricted/RestrictedRoute.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import ContactsPage from '../../pages/ContactsPage/ContactsPage.jsx'

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
              <Route path="/contacts" element={<PrivateRoute Component={<ContactsPage />} to="/" />}/>
              <Route path="*" element={<NotFoundPage  className="not-found"/>} />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </Background>

  );
}

export default App;
