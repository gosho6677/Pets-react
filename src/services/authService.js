import { auth } from '../firebase';

const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const exports = {
    login,
    register,
};

export default exports;