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
        username: user?.email
    };
    // TODO: 
    /* 
        1. set user (owner) id's on created db.json items
        2. create pet service to include owner id
        3. set isGuest route guard
        4. set isOwner route guard
        5. create myPets functionality
    */
    return (
        <>
            <AuthContext.Provider value={userInfo}>
            <Navigation />
            <main id="site-content">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/dashboard/category/:category" component={Dashboard} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/my-pets" exact component={isAuth(MyPets)} />
                    <Route path="/add-pet" exact component={isAuth(Create)} />
                    <Route path="/details/:petId" exact component={isAuth(Details)} />
                    <Route path="/edit/:petId" exact component={isAuth(Edit)} />
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
