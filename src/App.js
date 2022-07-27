import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
    const experienceData = data.map(experience => {
        return (
            <Card 
                key={experience.id}

                // SPREAD OPERATOR PASSING PROPS
                    {...experience}
                // SHORTHARD PASSING PROPS
                    // experience={experience}

                // CONVENTIONAL PASSING PROPS
                    // img={experience.coverImg}
                    // rating={experience.stats.rating}
                    // reviewCount={experience.stats.reviewCount}
                    // location={experience.location}
                    // title={experience.title}
                    // price={experience.price}
                    // openSpots={experience.openSpots}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <div className='card--list'>
                {experienceData}
            </div>
        </div>
    )
}