import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/Auth/selectors";

const RestrictedRoute = ({ Component, to }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={to} /> : Component;
};

export default RestrictedRoute;
