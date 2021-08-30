import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import petService from '../../services/petService';
import Pet from './Pet';

const MyPets = () => {
    const [pets, setPets] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        petService.getMyPets(userId)
            .then(setPets)
            .catch(err => console.error(err));
    }, [userId]);

    return (
        <section className="my-pets">
            <h1>My Pets</h1>
            <ul className="my-pets-list">
                {pets.length 
                    ? pets.map(pet => (
                    <Pet
                        key={pet.id}
                        pet={pet}
                        setPets={setPets}
                    />)) 
                    : <div>You don't own any pet publications.</div>
                }
            </ul>
        </section>
    );
};

export default MyPets;
