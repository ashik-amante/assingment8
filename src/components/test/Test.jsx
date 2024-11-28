import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Test = () => {
    const books = useLoaderData()
    const [pages, setPages] = useState(books)
    console.log(pages);
    const sortpages = pages.sort(function (a, b) {
        return b.totalPages - a.totalPages
    })

    console.log(sortpages);

    return (
        <div>
            <h1 className='text-center text-5xl'>ok</h1>
            <div className='flex justify-center mt-20'>
                <details className="dropdown">
                    <summary className="btn m-1">open or close</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Pages</a></li>
                        <li><a>Year </a></li>
                    </ul>
                </details>
            </div>
            {
                sortpages.map((page,index)=>  <div key={index} className='flex mt-20 justify-center'>
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={page.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">page : {page.totalPages}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
           
        </div>
    );
};

export default Test;