import { Link } from 'react-router-dom';
import petService from '../../services/petService';

const Pet = ({ pet, setPets }) => {

    const deleteHandler = () => {
        petService.del(pet.id)
            .then(() => {
                setPets(oldState => oldState.filter(p => p.id !== pet.id));
            })
            .catch(err => console.error(err));
    };

    return (
        <li className="myPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <div className="pet-info">
                <Link to={`/details/${pet.id}`}><button className="button">Details</button></Link>
                <button onClick={deleteHandler} className="button">Delete</button>
                <i className="fas fa-heart"></i> <span>{pet.likes}</span>
            </div>
        </li>
    );
};

export default Pet;
