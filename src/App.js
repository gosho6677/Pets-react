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
import AuthContext from './contexts/AuthContext';
import isGuest from './guards/isGuest';
import isAuth from './guards/isAuth';

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(userCredential => {
            if (userCredential) {
                setUser(userCredential);
            }
            return;
        });
    }, []);
    const userInfo = {
        isAuthenticated: Boolean(user),
        username: user?.email,
        userId: user?.uid
    };
    // TODO: 
    /* 
        [x]1. set user (owner) id's on created db.json items
        [x]2. create pet service to include owner id
        [x]3. set isGuest route guard
        [x]4. set edit/delete guard
        [x]5. create myPets functionality
        6. add notifications
    */
    return (
        <>
            <AuthContext.Provider value={userInfo}>
            <Navigation />
            <main id="site-content">
                <Switch>
                    <Route path="/" exact component={isAuth(Home)} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/dashboard/category/:category" component={Dashboard} />
                    <Route path="/login" exact component={isAuth(Login)} />
                    <Route path="/register" exact component={isAuth(Register)} />
                    <Route path="/my-pets" exact component={isGuest(MyPets)} />
                    <Route path="/add-pet" exact component={isGuest(Create)} />
                    <Route path="/details/:petId" exact component={isGuest(Details)} />
                    <Route path="/edit/:petId" exact component={isGuest(Edit)} />
                    <Route path="/logout" render={() => {
                        auth.signOut()
                            .then(() => setUser(null));
                        return <Redirect to="/" />;
                    }} />
                </Switch>
            </main>
            </AuthContext.Provider>
        </>
    );
}

export default App;
