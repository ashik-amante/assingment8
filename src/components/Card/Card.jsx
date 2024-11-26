import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
    const { image, bookName, author, bookId, category, publisher, rating, review, totalPages, tags } = book
    return (
        <div>
            <Link to={`/bookdetail/${bookId}`}>
                <div className='border rounded-2xl p-6'>
                    <div >
                        <div className='px-24 py-8 bg-[#F3F3F3] rounded-2xl mb-6'>
                            <div className='flex items-center justify-center'>
                                <img style={{width:'100px', borderRadius:'10px'}} src={image} alt="" />
                            </div>
                        </div>

                        <div className='mb-3 space-y-4'>
                            {/* tags */}
                            <div className='flex gap-10'>
                                {
                                    tags.map((tag, index) => <div key={index}>
                                        <button className='bg-green-50 text-green-500 font-semibold px-4 rounded-2xl py-1'>{tag}</button>
                                    </div>)
                                }
                            </div>
                            <h1 className='text-2xl font-bold'>{bookName}</h1>
                            <p className='font-semibold'>By : {author}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between mt-5'>
                            <h1 className='text-[#131313CC] font-semibold'>{category}</h1>
                            <div className='flex gap-2'>
                                <p className='text-[#131313CC] font-semibold'>5.00</p>
                                <span>icon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;