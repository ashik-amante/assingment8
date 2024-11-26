import React from 'react';
import Book from  '../../assets/image/mooking.jpg'

const Banner = () => {
    return (
        <div className='flex items-center justify-center gap-10'>
            <div className='space-y-16'>
                <h1 className='text-5xl font-bold'>Books to freshen up <br />
                    your bookshelf</h1>
                <button className='bg-green-600 text-white px-7 py-2 rounded'>View The List</button>
            </div>
            <div className='p-6'>
                <img style={{width:'200px', borderRadius: '5px'}} src={Book} alt="" />
            </div>

        </div>
    );
};

export default Banner;