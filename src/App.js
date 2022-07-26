import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <Card 
                image="katie-z.png"
                // img="https://i.stack.imgur.com/OlvGM.jpg?s=64&g=1"
                rating={5.0}
                reviewCount={6}
                country="USA"
                title="Life lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}