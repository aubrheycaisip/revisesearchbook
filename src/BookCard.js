import React from 'react'
import './index.css';

const BookCard = (props) =>{
    return(
        <div className="card-container">
            <a style={{textDecoration:'none'}} href={props.link} target="_blank">
            <img src={props.image} alt=""/>
            <div className="desc">
                <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}><strong>{props.title}</strong></p>
                <p style={{fontSize:'12px',marginTop:'5px',color:'black'}}>{props.author}</p>
                {/* <p>{props.retailPrice}</p> */}
            </div>
            </a>

        </div>

    )
}
BookCard.defaultProps ={
    image:'http://i65.tinypic.com/349f9n8.jpg'
}

export default BookCard;