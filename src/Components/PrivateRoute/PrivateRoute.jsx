import React, { useContext } from 'react';
import { AuthContext } from '../../rootLayout/RootLayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const {pathname}  = useLocation();

    if (loader) {
        return <div className='p-5 flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div></div>
    }
    if (!user) {
        // navigate('/');
        // if we call navigate() here there will give you error
        return <Navigate state={pathname} to={'/signin'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;