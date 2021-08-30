import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
    const location = useLocation();
    return (
        <div>
            <h1>
                Path not found (<code>{location.pathname}</code>).
                Please go back to our Home Page
                <button className="button">
                    <Link  to={'/'}> Home Page </Link>
                </button>
            </h1>
            
        </div>
    );
};

export default NotFound;