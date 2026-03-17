import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LiveSearchBar from "../components/LiveSearchBar";

const DashboardPage = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    const handleLogout = () => {
        // Implementar lógica de cerrar sesión

        logOut();
        navigate("/");
    };

    return (
        <>
            <div>
                <h1>DashboardPage PROTEGIDO</h1>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </div>
            <br />
            <div>
                <h2>Search Products</h2>
                <LiveSearchBar/>
            </div>
        </>
    );
};

export default DashboardPage;
