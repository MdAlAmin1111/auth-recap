import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';
import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {

    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleToast('Login successful!');
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

    const handleToast = (message) => {
        toast(message);
    }


    return (
        <div className="w-full max-w-md mx-auto p-4 my-2 rounded-md shadow sm:p-8 bg-gray-100 text-gray-800">

            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center dark:text-gray-600">Dont have account?
                <Link to={'/signup'} className="focus:underline hover:underline text-violet-600"> Sign up here.</Link>
            </p>

            <div className="my-6 space-y-4">

                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <FaGoogle className="w-5 h-5 fill-current" />
                    <p>Login with Google</p>
                </button>

                <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                    <FaGithub className="w-5 h-5 fill-current" />
                    <p>Login with GitHub</p>
                </button>

            </div>

            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-600" />
                <p className="px-3 text-gray-600">OR</p>
                <hr className="w-full text-gray-600" />
            </div>

            <form onSubmit={handleSignIn} className="space-y-8">

                <div className="space-y-4">

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                </div>
                {
                    error && <p className='text-red-400 font-semibold'>{error}</p>
                }

                <button type='submit' className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 text-gray-50">Sign in</button>

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;