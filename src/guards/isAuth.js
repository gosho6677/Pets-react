import { useHistory } from 'react-router';
import { auth } from '../firebase';

const isAuth = (WrappedComponent) => {
    const Component = props => {
        const history = useHistory();

        auth.onAuthStateChanged(userCredential => {
            if (userCredential) {
                history.push('/dashboard');
                return null;
            }
        });

        return <WrappedComponent {...props} />;
    };
    return Component;
};

export default isAuth;