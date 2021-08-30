import { useState } from 'react';
import authService from '../../services/authService';
import ErrorBox from '../Notifications/ErrorBox';

const Login = ({ history }) => {
    const [error, setError] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();

        const email = e.target.username.value;
        const password = e.target.password.value;

        if(!email || !password) {
            setError('All fields are required!');
            return;
        }

        authService.login(email, password)
            .then(() => history.push('/dashboard'))
            .catch(err => {
                setError(err.message);
            });
    };
    
    return (
        <section className="login">
            {error && <ErrorBox error={error} setError={setError} />}
            <form onSubmit={loginHandler}>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
};

export default Login;
