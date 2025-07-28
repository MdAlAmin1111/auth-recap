/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
// import { login } from '../utils/utils';


export const AuthContext = createContext();

const RootLayout = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const value = {
        setError,
        error,
        user,
        setUser,
        loader,
        setLoader
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
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