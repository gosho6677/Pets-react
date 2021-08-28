import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import petService from '../../services/petService';
import PetList from "./PetList";

const Dashboard = ({ match }) => {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        const query = match.params.category || '';
        petService.getAll(query)
            .then(pets => setPets(pets))
            .catch(err => console.error(err));
        
    }, [match.params.category]);
    return (
        <section className="dashboard">
                <h1>Dashboard</h1>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/dashboard/category/all">All</Link></li>
                        <li><Link to="/dashboard/category/cats">Cats</Link></li>
                        <li><Link to="/dashboard/category/dogs">Dogs</Link></li>
                        <li><Link to="/dashboard/category/parrots">Parrots</Link></li>
                        <li><Link to="/dashboard/category/reptiles">Reptiles</Link></li>
                        <li><Link to="/dashboard/category/other">Other</Link></li>
                    </ul>
                </nav>
                <PetList pets={pets} />
            </section>
    );
};

export default Dashboard;
