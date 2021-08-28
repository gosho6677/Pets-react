import { Route, Switch } from 'react-router';

import './App.css';
import Login from './components/Login/Login.js';
import Navigation from './components/Navigation/Navigation.js';
import Home from './components/Home/Home.js';
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import MyPets from './components/MyPets/MyPets.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import { Redirect } from 'react-router-dom';

import { auth } from './firebase';
import { useEffect, useState } from 'react';

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(userCredential => {
            if (userCredential) {
                setUser(userCredential);
            }
            return;
        });
    }, [user]);
    
    return (
        <div>
            <Navigation />
            <main id="site-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/dashboard/category/:category" component={Dashboard} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/my-pets" exact component={MyPets} />
                    <Route path="/add-pet" exact component={Create} />
                    <Route path="/details/:petId" exact component={Details} />
                    <Route path="/edit/:petId" exact component={Edit} />
                    <Route path="/logout" render={() => {
                        auth.signOut();
                        return <Redirect to="/" />;
                    }} />
                </Switch>
            </main>
        </div>
    );
}

export default App;
