import React, { useContext } from 'react';
import { AuthContext } from '../../rootLayout/RootLayout';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <div className='p-5 flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div></div>
    }
    if (!user) {
        // navigate('/');
        // if we call navigate() here there will give you error
        return <Navigate to={'/signup'}></Navigate>
    }

    return (
        <div>
            <h1 className='text-center'>i am inside private route</h1>
            {children}
        </div>
    );
};

export default PrivateRoute;