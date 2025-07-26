import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {

    const [error, setError] = useState('');

    const handleToast = (message) => {
        toast(message);
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        const fullname = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        console.log(fullname, email, password, confirmPassword);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleToast('Sign up successful!');
                setError('');


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode);
                console.log(errorMessage);
                handleToast(`Please try again!`);
            })
    }

    return (
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-800 my-2">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm dark:text-gray-600">Sign up to access your account</p>
            </div>
            <form noValidate="" onSubmit={handleSignUp} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="fullname" className="block mb-2 text-sm">Full Name</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Jhon Doe" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="confirm_password" className="text-sm">Confirm Password</label>
                        </div>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                </div>
                {
                    error && <p className='text-red-400 font-semibold'>{error}</p>
                }
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-gray-50">Sign up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account?
                        <Link to={'/signin'} className="hover:underline text-violet-600"> Sign in</Link>.
                    </p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;