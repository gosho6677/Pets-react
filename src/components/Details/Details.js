import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import petService from '../../services/petService';
import AuthContext from '../../contexts/AuthContext';

const Details = ({ match, history }) => {
    const id = match.params.petId;
    const [pet, setPet] = useState({});
    const { userId } = useContext(AuthContext);
    const isOwner = pet.ownerId === userId;

    useEffect(() => {
        petService.getById(id)
            .then(setPet)
            .catch(err => console.error(err));
    }, [id]);

    const deleteHandler = () => {
        petService.del(id)
            .then(() => history.push('/dashboard'))
            .catch(err => console.error(err));
    };

    const petHandler = () => {
        petService.pet(id)
            .then((res) => setPet(res));
    };

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                {!isOwner && <button onClick={petHandler} className="button">
                    <i className="fas fa-heart" />
                    Pet
                </button>}
            </p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            {isOwner && <div className="pet-info">
                <Link to={`/edit/${id}`}><button className="button btn1">Edit</button></Link>
                <button onClick={deleteHandler} className="button">Delete</button>
            </div>}
            <p className="description">{pet.description}</p>
        </section>
    );
};

export default Details;
