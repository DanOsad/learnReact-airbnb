import React from 'react'

export default function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} alt="Cover for Experience" className="card--photo" />
            <div className="card--rating--bar">
                <img src="images/star.png" alt="star" className="card--rating--star" />
                <span className='card--rating--value'>{props.stats.rating.toFixed(1)}</span>
                <span className='card--rating--reviews'>({props.stats.reviewCount})</span>
                <span className='card--rating--dot'>·</span>
                <span className='card--rating--location'>{props.location}</span>
            </div>
            <span className='card--title'>{props.title}</span>
            <div className='card--price--bar'>
                <span className='card--price'>From ${props.price}</span>
                <span className='card--perPerson'>/ person</span>
            </div>
        </div>
    )
} 