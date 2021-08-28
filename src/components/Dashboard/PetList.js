import Pet from "./Pet";

const PetList = ({ pets }) => {
    return (
        <ul className="other-pets-list">
            {pets.map(p => <Pet key={p.id} pet={p} />)}
        </ul>
    );
};

export default PetList;
