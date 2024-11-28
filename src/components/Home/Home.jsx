import React from 'react';
import Banner from '../Banner/Banner';
import Bookscard from '../BooksCard/Bookscard';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-10'>
            <Helmet>
                <title>Book Vibe | Home</title>
            </Helmet>
            <Banner></Banner>
            <Bookscard></Bookscard>
        </div>
    );
};

export default Home;