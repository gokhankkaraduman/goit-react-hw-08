import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const PrivateRoute = ({ Component, to }) => {
    
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? Component : <Navigate to={to} />;
};

export default PrivateRoute;