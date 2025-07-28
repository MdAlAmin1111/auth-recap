import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext();

const RootLayout = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);


    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const value = {
        signup,
        login,
        setError,
        error,
        user,
        setUser
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
        return () => unSubscribe();
    }, [])

    return (
        <div>
            <AuthContext.Provider value={value}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </AuthContext.Provider>

        </div>
    );
};

export default RootLayout;