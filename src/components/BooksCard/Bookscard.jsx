import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Bookscard = () => {
    const [books,setBooks] = useState([])
    console.log(books);
    
    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])
    return (
        <div className=' text-black bg-white'>
            <h1 className='text-4xl text-center mb-9'>Books</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    books.map(book=> <Card book={book} key={book.bookId}></Card> )
                }
            </div>
        </div>
    );
};

export default Bookscard;