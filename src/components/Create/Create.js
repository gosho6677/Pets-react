import { useState } from 'react';
import petService from '../../services/petService';

const Create = ({ history }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [category, setCategory] = useState('cats');

    const submitHandler = e => {
        e.preventDefault();

        if (!name || !description || !imageURL) {
            return;
        }
        petService.create({ name, description, imageURL, category })
            .then(() => {
                history.push('/dashboard');
            })
            .catch(err => console.error(err));
    };

    return (
        <section className="create">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                placeholder="Name"
                            />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea
                                rows="4"
                                cols="45"
                                type="text"
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                id="description"
                                placeholder="Description"
                            >
                            </textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input
                                type="text"
                                name="imageURL"
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                                id="image"
                                placeholder="Image"
                            />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="cats">Cats</option>
                                <option value="dogs">Dogs</option>
                                <option value="parrots">Parrots</option>
                                <option value="reptiles">Reptiles</option>
                                <option value="other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );
};

export default Create;
