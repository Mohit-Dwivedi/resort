import React, { useState } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import { FaB } from 'react-icons/fa6'

function Services() {
    const [services, setservices] = useState([
            {
            icon: <FaCocktail/>,
            title: "Free cocktails",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ratione?"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ratione?"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ratione?"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest strongest Beer",
            info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ratione?"
            }
    ])

  return (
    <section className='services'>
          <div className='section-title'>
            <h4>Services</h4>
            <div></div>
          </div>
      <div className="services-center">
        {services.map((item, index) => {
            return <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
        })}
      </div>
    </section>
  )
}

export default Services
