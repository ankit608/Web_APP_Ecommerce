import React from 'react'
import style from '../../../styles/styles'
import EventCard from "./EventCard.jsx"

const Events = () => {
  return (
    <div> <div>
    <div className={`${style.section} py-4`}>
        <div className={`${style.heading}`}>
            <h1>Popular Events</h1>
        </div>
        <div className="w-full grid">
            <EventCard></EventCard>
        </div>
        
    </div>
</div></div>
  )
}

export default Events