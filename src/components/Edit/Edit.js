import { useEffect, useState } from "react";
import petService from '../../services/petService';
import ErrorBox from "../Notifications/ErrorBox";

const Edit = ({ match, history }) => {
    const id = match.params.petId;
    const [pet, setPet] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        petService.getById(id)
            .then(p => setPet(p))
            .catch(err => console.error(err));
    }, [id]);

    const submitHandler = e => {
        e.preventDefault();

        if (!pet.description) {
            setError('Description is required!');
            return;
        }

        petService.edit(pet, id)
            .then((res) => {
                console.log(res);
                history.push(`/details/${id}`);
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <section className="deletePet">
            {error && <ErrorBox error={error} setError={setError} />}
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <form onSubmit={submitHandler}>
                <textarea
                    rows="4"
                    cols="45"
                    type="text"
                    name="description"
                    id="description"
                    value={pet.description}
                    onChange={(e) => setPet(state => ({ ...state, description: e.target.value }))}
                    placeholder="Description"
                >
                </textarea>
                <button className="button">Edit</button>
            </form>
        </section>
    );
};

export default Edit;