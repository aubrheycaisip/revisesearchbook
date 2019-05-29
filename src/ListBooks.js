import React from 'react';
import './index.css';
import BookCard from './BookCard';

const ListBooks = (props) =>{
    return(
        <div className="List">
            {
                props.books.map((book,i)=>{
                    var tumbimg =''
                    // alert(book.volumeInfo.imageLinks.thumbnail !== undefined)
                    if(!book.volumeInfo.imageLinks)
                    {
                        tumbimg ='http://i65.tinypic.com/349f9n8.jpg'
                    }
                    else
                    {
                        tumbimg =book.volumeInfo.imageLinks.thumbnail
                    }
                        
                    return <BookCard
                        key={i}
                        image={tumbimg}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        link={book.volumeInfo.previewLink}
                                // retailPrice={book.saleInfo.retailPrice.amount}
                        />
                })
            }
        </div>

    )
}
export default ListBooks;