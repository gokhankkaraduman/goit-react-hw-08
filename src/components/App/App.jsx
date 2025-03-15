import Header from '../Layout/Header/Header.jsx';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Home from '../../pages/HomePage/Home.jsx';
function App() {


  return (
    <BrowserRouter>   
      <main className='main'>

        <Header className='header'/>
        <Home />  
      </main>
    </BrowserRouter>
  )
}

export default App;
