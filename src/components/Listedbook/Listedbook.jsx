import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadBooks } from '../../utility/readbook';
import { getStoredWishBooks } from '../../utility/wishlist';
import { useLoaderData } from 'react-router-dom';
import { GoLocation } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { TbBrandPagekit } from "react-icons/tb";
import { TfiArrowCircleDown } from "react-icons/tfi";



const Listedbook = () => {
    const [readbooklist, setReadBooklist] = useState([])
    const [wishlist, setWishlist] = useState([])
    console.log(readbooklist);
    console.log(wishlist);

    // load books from route path
    const books = useLoaderData()

    // load Read books list from loacal storage 
    useEffect(() => {
        const storedBooklist = getStoredReadBooks()
        const readbooks = books.filter(book => storedBooklist.includes(book.bookId))
        setReadBooklist(readbooks)
    }, [])

    // load Wishlist Books from loacal storage 
    useEffect(() => {
        const wishlistBook = getStoredWishBooks()
        const wishbooks = [];
        for (const id of wishlistBook) {
            const book = books.find(book => book.bookId === id)
            wishbooks.push(book)
        }
        setWishlist(wishbooks)
    }, [])

  

    return (
        <div>
            <h1 className='text-4xl text-center'>Books</h1>
            <div className='flex justify-center mt-8'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-green-600 text-white   ">Sort By <span className='text-lg'><TfiArrowCircleDown /></span> </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow  items-center">
                        <li><a>Rating</a></li>
                        <li><a>Number Of Page</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {/* Read books section  */}
                        <div >
                            {
                                readbooklist.map(book => <div key={book.bookId} className='grid grid-cols-4 border gap-10 rounded-lg mb-6 text-black bg-white p-6'>
                                    <div className='grid col-span-1 p-6 bg-gray-100 rounded-lg '>
                                        <div className='flex items-center justify-center'>
                                            <img style={{ width: '100px', borderRadius: '10px' }} src={book.image} alt="" />
                                        </div>
                                    </div>
                                    <div className='grid col-span-3'>
                                        <div className='space-y-4'>
                                            <h1 className='text-2xl font-bold'>{book.bookName}</h1>
                                            <h1>By {book.author} </h1>
                                        </div>
                                        <div className='flex items-center gap-10 space-y-4'>

                                            <p className=' font-bold flex gap-6 items-center'>Tags:
                                                <div className='flex gap-4'>
                                                    {
                                                        book.tags.map((tag, index) => <p className='bg-green-100 px-6 py-1 rounded-2xl text-green-500' key={index}> #{tag}</p>)
                                                    }
                                                </div>
                                            </p>
                                            <div className='flex items-center gap-5'>
                                                <span className='text-xl'><GoLocation /></span>
                                                <p>Year of pubslishing : {book.yearOfPublishing}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-8 mb-4'>
                                            <div className='flex items-center gap-3'>
                                                <span className='text-xl'><IoPeopleOutline /></span>
                                                <h1>Publisher : {book.publisher}</h1>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-xl'><TbBrandPagekit /></span>
                                                <h1>Page : {book.totalPages}</h1>
                                            </div>
                                        </div>
                                        < hr />
                                        <div className='flex gap-5 mt-3'>
                                            <button className='bg-blue-50 text-blue-400 font-semibold px-4 rounded-2xl '>Category: {book.category}</button>
                                            <button className='bg-orange-50 text-orange-400 font-semibold px-4 rounded-2xl '>Rating : {book.rating}</button>
                                            <button className='bg-green-600 text-white font-semibold px-4 rounded-2xl py-1 '>View Details </button>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>
                        <h2>Any content 1</h2>

                    </TabPanel>
                    {/* Read book loist ends  */}

                    {/* Wishlist Books section  */}
                    <TabPanel>
                        <div >
                            {
                                wishlist.map(book => <div key={book.bookId} className='grid grid-cols-4 border gap-10 rounded-lg mb-6 text-black bg-white p-6'>
                                    <div className='grid col-span-1 p-6 bg-gray-100 rounded-lg '>
                                        <div className='flex items-center justify-center'>
                                            <img style={{ width: '100px', borderRadius: '10px' }} src={book.image} alt="" />
                                        </div>
                                    </div>
                                    <div className='grid col-span-3'>
                                        <div className='space-y-4'>
                                            <h1 className='text-2xl font-bold'>{book.bookName}</h1>
                                            <h1>By {book.author} </h1>
                                        </div>
                                        <div className='flex items-center gap-10 space-y-4'>

                                            <p className=' font-bold flex gap-6 items-center'>Tags:
                                                <div className='flex gap-4'>
                                                    {
                                                        book.tags.map((tag, index) => <p className='bg-green-100 px-6 py-1 rounded-2xl text-green-500' key={index}> #{tag}</p>)
                                                    }
                                                </div>
                                            </p>
                                            <div className='flex items-center gap-5'>
                                                <span className='text-xl'><GoLocation /></span>
                                                <p>Year of pubslishing : {book.yearOfPublishing}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-8 mb-4'>
                                            <div className='flex items-center gap-3'>
                                                <span className='text-xl'><IoPeopleOutline /></span>
                                                <h1>Publisher : {book.publisher}</h1>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-xl'><TbBrandPagekit /></span>
                                                <h1>Page : {book.totalPages}</h1>
                                            </div>
                                        </div>
                                        < hr />
                                        <div className='flex gap-5 mt-3'>
                                            <button className='bg-blue-50 text-blue-400 font-semibold px-4 rounded-2xl '>Category: {book.category}</button>
                                            <button className='bg-orange-50 text-orange-400 font-semibold px-4 rounded-2xl '>Rating : {book.rating}</button>
                                            <button className='bg-green-600 text-white font-semibold px-4 rounded-2xl py-1 '>View Details </button>
                                        </div>
                                    </div>

                                </div>)
                            }
                        </div>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Listedbook;