import React from 'react';
import { Navigate, useLoaderData } from 'react-router';
import alamin from '../../../assets/alamin.png'
import { AuthContext } from '../../../rootLayout/RootLayout';

const Details = () => {
    // const { id } = useParams();
    const data = useLoaderData();
    const { body, title } = data;
    // const navigate = useNavigate();
    // const { user, loader } = useContext(AuthContext);

    // if (loader) {
    //     return <div className='p-5 flex justify-center items-center'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div></div>
    // }
    // // return <Navigate to={'/signup'}></Navigate>;
    // if (!user) {
    //     // navigate('/');
    //     // if we call navigate() here there will give you error
    //     return <Navigate to={'/signup'}></Navigate>
    // }

    return (
        <div className="bg-gray-100 text-gray-800 py-15">
            <div className="container px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Jun 1, 2020</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                </div>
                <div className="mt-3">
                    <p className="text-4xl font-bold">{title}</p>
                    <p className="mt-2 text-xl">{body} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque velit cumque harum amet quis dignissimos iure quibusdam sapiente dicta? Earum?</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div></div>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src={alamin} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                            <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;