import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredReadBooks, saveReadBooks } from '../../utility/readbook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredWishBooks, saveWishBooks } from '../../utility/wishlist';
import { Helmet } from 'react-helmet';

const Bookdetails = () => {
    const [readBookdata,setReadBookData] = useState([])
    const [wishlist,setWishlist] = useState([])
    console.log(readBookdata);
    useEffect(()=>{
        const lsreadBook = getStoredReadBooks()
        setReadBookData(lsreadBook)
    },[])

    useEffect(()=>{
        const lswishedBook = getStoredWishBooks()
        setWishlist(lswishedBook)
    },[])


    const books = useLoaderData();
    // console.log(books);
    const { bookId } = useParams()
    const bookIdInt = parseInt(bookId)
    // console.log(typeof (bookId));
    // console.log(bookIdInt);

    const handleReadbook = () =>{
        const existRead = readBookdata.find(readId=> readId === bookIdInt )
        if(!existRead){
            toast.success('added')
        }
        else{
            toast.warn('already add')
        }
        // toast('Added to Read List')
        saveReadBooks(bookIdInt)
    }

    const handleWishlist = () =>{
        const existwish = wishlist.find(wishid=> wishid === bookIdInt)
        const existRead = readBookdata.find(readId=> readId === bookIdInt ) 
        if(!existwish && !existRead){
            toast.success('Added to wish list')
            
        }
        else{
            toast.warning('You have already Read this book')
        }
        saveWishBooks(bookIdInt)
    }

    const book = books.find(book => book.bookId === bookIdInt)
    // console.log(book);
    const { image, bookName, author, category, publisher, rating, review, totalPages, tags, yearOfPublishing } = book
    return (
        <div className='bg-white text-black mt-20' >
            <Helmet>
                <title>Book Detail</title>
            </Helmet>
            <div className='md:flex md:gap-14 justify-center  mt-4'>
                <div className='p-16 bg-[#F3F3F3] rounded-lg'>
                    <img style={{ width: '400px', borderRadius: '10px' }} src={image} alt="" />
                </div>
                <div>
                    <div>
                        <div className='space-y-5 mb-4'>
                            <h1 className='font-bold text-4xl'>{bookName}</h1>
                            <h1 className='font-bold text-4xl'>{bookId}</h1>
                            <p className='font-bold text-xl'>By : {author} </p>
                        </div>
                        <hr />
                        <p className='mt-4 mb-4'>{category}</p>
                        <hr />
                        <div className='space-y-6 mb-6'>
                            <h1><span className='font-bold'>Review</span> <span>{review}</span> </h1>
                            <div className='flex items-center gap-10'>
                                <p className='font-bold'>Tags:</p>
                                <p>
                                    {/* tags */}
                                    <div className='flex gap-10'>
                                        {
                                            tags.map((tag, index) => <div key={index}>
                                                <button className='bg-green-50 text-green-500 font-semibold px-4 rounded-2xl py-1'>{tag}</button>
                                            </div>)
                                        }
                                    </div>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className='space-y-3 mt-6'>
                            <p >Number Of Page : <span className='font-bold'>{totalPages} </span></p>
                            <p>Publisher :  <span className='font-bold'>{publisher} </span> </p>
                            <p>Year Of Publishing :  <span className='font-bold'>{yearOfPublishing} </span></p>
                            <p>Rating : <span className='font-bold'>{rating} </span></p>
                        </div>
                        <div className='flex  gap-6 mt-8'>
                            <button onClick={handleReadbook} className='bg-transparent border border-gray-400 text-black px-7 py-2 rounded'>Read</button>
                            <button onClick={handleWishlist} className='bg-[#50B1C9] text-white px-7 py-2 rounded'>Wishlist</button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;