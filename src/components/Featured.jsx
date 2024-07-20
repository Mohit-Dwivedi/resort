import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
 
const Featured = () => {
    let {featuredRooms, loading } = useContext(RoomContext) 

  return (
    <div className='featured-rooms'>
      <div className='section-title'>
            <h4>Featured Rooms</h4>
            <div></div> 
      </div>
      <div className="featured-rooms-center">
        {loading? <Loading /> :  featuredRooms.map(room => {
          return <Room key={room.id} room={room} />
        })} 
      </div>
    </div>
  )
}

export default Featured
