import React from 'react';
import Banner from '../Banner/Banner';
import Bookscard from '../BooksCard/Bookscard';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-10'>
            <Banner></Banner>
            <Bookscard></Bookscard>
        </div>
    );
};

export default Home;