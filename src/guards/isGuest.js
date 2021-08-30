// import AuthContext from '../contexts/AuthContext';
// import { useContext } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebase';

const isGuest = (WrappedComponent) => {
    const Component = props => {
        const history = useHistory();

        auth.onAuthStateChanged(userCredential => {
            if (!userCredential) {
                history.push('/login');
                return null;
            }
        });

        return <WrappedComponent {...props} />;
    };
    return Component;
};

export default isGuest;