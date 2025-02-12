import { useAuth } from "../context/AuthContext";
import Navigate from 'react-router-dom';

const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return(
        <div>ProtectedRoute</div>
    );
};

export default ProtectedRoute;
