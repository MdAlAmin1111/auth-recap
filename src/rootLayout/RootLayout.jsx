import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext();

const RootLayout = () => {
    const [error, setError] = useState('');


    const login = (email, password) => {
        console.log('i am handleLogin', email, password);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const value = {
        signup,
        login,
        setError,
        error
    }

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