import React from 'react';
import Banner from '../Banner/Banner';
import Bookscard from '../BooksCard/Bookscard';

const Home = () => {
    return (
        <div>
            <div className='mb-2 border'>
                <Banner></Banner>
            </div>
            <Bookscard></Bookscard>
        </div>
    );
};

export default Home;