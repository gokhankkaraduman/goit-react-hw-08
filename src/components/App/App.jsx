import Header from '../Layout/Header/Header.jsx';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/HomePage/Home.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import Background from '../Background/Background.jsx';

function App() {


  return (
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
      </Background>
    </BrowserRouter>
  )
}

export default App;
