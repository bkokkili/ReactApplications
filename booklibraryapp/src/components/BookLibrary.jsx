import React from 'react';
import Book from './Book'
import { bookData } from './data';


const BookLibrary = () =>{
    return (
        <div className="library-app">
        <div className="book-grid">
         {
            bookData.map((value, index) =>(
                <Book bookData={value} key={index}/>              
            ))
         }
        </div>
        </div>
    )
};

export default BookLibrary;