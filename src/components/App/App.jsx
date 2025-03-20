import { lazy, Suspense } from 'react'; // Lazy ve Suspense import edildi
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Background from '../Background/Background.jsx';
import { ToastContainer } from 'react-toastify';

// Header, Footer ve MainLoading bileşenleri hemen yükleniyor (lazy değil)
import Header from '../Layout/Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import MainLoading from '../MainLoading/MainLoading.jsx';

// Sayfaları lazy loading ile import ediyoruz
const Home = lazy(() => import('../../pages/HomePage/Home.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/RegisterPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));

// PrivateRoute ve RestrictedRoute bileşenleri de hemen yükleniyor (lazy değil)
import PrivateRoute from '../../router/Private/PrivateRoute.jsx';
import RestrictedRoute from '../../router/Restricted/RestrictedRoute.jsx';

function App() {
  return (
    <Background>
      <div className="main">
        <Header />
        {/* Suspense ile lazy yüklenen bileşenler için yükleme ekranı tanımlıyoruz */}
        <Suspense fallback={<MainLoading />}>
          <Routes>
            {/* Giriş yapmamış kullanıcılar için LoginPage ve RegisterPage */}
            <Route
              path="/login"
              element={<RestrictedRoute Component={<LoginPage />} to="/" />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute Component={<RegisterPage />} to="/" />}
            />
            <Route path="/" element={<Home />} />
            {/* Giriş yapmış kullanıcılar için Contacts */}
            <Route
              path="/contacts"
              element={<PrivateRoute Component={<ContactsPage />} to="/" />}
            />
            <Route
              path="*"
              element={<NotFoundPage className="not-found" />}
            />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ToastContainer />
    </Background>
  );
}

export default App;