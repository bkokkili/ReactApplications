import React from 'react'

const Book= ({bookData}) =>{
    console.log(bookData);
    return (
        <div className="book-card">
           <h1>{bookData.title}</h1>
           <p className='paragraph'>Author: {bookData.author}</p>
           <p className='paragraph'>Publication Date: {bookData.year}</p>
           <p className='paragraph'>Country: {bookData.country}</p>
           <a href={bookData.link} target="_blank"><button>Show Details</button></a>
        </div>
    )
}

export default Book