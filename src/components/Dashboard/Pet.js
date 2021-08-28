import { Link } from "react-router-dom";

const Pet = ({ pet }) => {
    return (
        <li className="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Category: {pet.category}</p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/details/${pet.id}`}><button className="button">Details</button></Link>
            </div>
        </li>
    );
};

export default Pet;
