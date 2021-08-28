const baseUrl = 'http://localhost:5000/pets';

const getAll = (str) => {
    const query = (str !== 'all' && str) ? `?category=${str}` : '';
    const url = `${baseUrl}${query}`;
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
};

const getById = (id) => {
    const url = `${baseUrl}/${id}`;
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
};

const create = body => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...body, likes: 0 })
    })
        .then(res => res.json())
        .catch(err => console.error(err));
};

const edit = (body, id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch(err => console.error(err));
};

const pet = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then(pet => {
            return fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...pet, likes: Number(pet.likes) + 1 })
            }).then((res) => res.json());
        });
};

const del = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    })
        .catch(err => console.error(err));
};

const exports = {
    getAll,
    getById,
    create,
    pet,
    edit,
    del,
};

export default exports;