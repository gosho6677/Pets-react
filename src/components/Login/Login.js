import { auth } from '../../firebase';

const Login = ({ history }) => {
    const loginHandler = (e) => {
        // TODO -> move into Auth Services folder
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        if(!username || !password) return;

        auth.signInWithEmailAndPassword(username, password)
            .then(() => history.push('/'))
            .catch(err => console.error(err));
    };
    
    return (
        <section className="login">
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
