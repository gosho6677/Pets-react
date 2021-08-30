import { NavLink } from 'react-router-dom';
import './Navigation.css';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';

const Navigation = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <header id="site-header">
            <nav className="navbar">
                {isAuthenticated ?
                    <section className="navbar-dashboard">
                        <div className="first-bar">
                            <NavLink to="/dashboard">Dashboard</NavLink>
                            <NavLink className="button" to="/my-pets">My Pets</NavLink>
                            <NavLink className="button" to="/add-pet">Add Pet</NavLink>
                        </div>
                        <div className="second-bar">
                            <ul>
                                <li>Welcome, {username}!</li>
                                <li><NavLink to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</NavLink></li>
                            </ul>
                        </div>
                    </section>
                    : <section className="navbar-anonymous">
                        <ul>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                            <li><NavLink to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink></li>
                            <li><NavLink to="/register"><i className="fas fa-user-plus"></i> Register</NavLink></li>
                        </ul>
                    </section>
                }
            </nav>
        </header>
    );
};

export default Navigation;
