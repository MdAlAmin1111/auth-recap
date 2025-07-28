import React from 'react';
// import alamin from '../../../assets/alamin.png';
import { Link } from 'react-router';
const Card = ({ singlePost }) => {
    const { id, title, body } = singlePost;
    let newBody, newTitle;
    newTitle = title.slice(0, 20);

    if (body.length > 35) {
        newBody = body.slice(0, 35) + '...';
    }
    return (
        <div className="w-[100%] rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src={'https://thumbs.dreamstime.com/b/young-indian-man-happy-outdoors-looking-camera-39595562.jpg'} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{newTitle}</h2>
                    <p className="text-gray-800">{newBody}</p>
                </div>
                <Link to={`/details/${id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50">Read more</Link>
            </div>
        </div>
    );
};

export default Card;