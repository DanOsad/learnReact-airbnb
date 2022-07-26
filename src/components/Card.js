import React from 'react'
import star from "../images/star.png"

export default function Card (props) {
    return (
        <div className="card">
            <img src={`./images/${props.image}`} alt="Katie Zaferes" className="card--photo" />
            <div className="card--rating--bar">
                <img src={star} alt="star" className="card--rating--star" />
                <span className='card--rating--value'>{props.rating.toFixed(1)}</span>
                <span className='card--rating--reviews'>({props.reviewCount})</span>
                <span className='card--rating--dot'>·</span>
                <span className='card--rating--location'>{props.country}</span>
            </div>
            <span className='card--title'>{props.title}</span>
            <div className='card--price--bar'>
                <span className='card--price'>From ${props.price}</span>
                <span className='card--perPerson'>/ person</span>
            </div>
        </div>
    )
} 