import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card/Card';

const AllPosts = () => {
    const allPosts = useLoaderData();

    return (
        <div className='container my-5 mx-auto grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                allPosts.map((singlePost) => <Card key={singlePost.id} singlePost={singlePost}></Card>)
            }
        </div>
    );
};

export default AllPosts;