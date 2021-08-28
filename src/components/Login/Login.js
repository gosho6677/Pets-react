import authService from '../../services/authService';

const Login = ({ history }) => {
    const loginHandler = (e) => {
        e.preventDefault();

        const email = e.target.username.value;
        const password = e.target.password.value;

        if(!email || !password) return;

        authService.login(email, password)
            .then(() => history.push('/dashboard'))
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
