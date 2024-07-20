import React, { useContext } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomContext } from '../context'
import Loading from '../components/Loading'

const RoomContainer = () => {
  const {loading, sortedRooms, rooms} = useContext(RoomContext)   

  if(loading){
    return <Loading />
  }

  return (
    <div>
      <RoomFilter rooms={rooms}/>
      <RoomList rooms={sortedRooms}/>
    </div>
  )
}

export default RoomContainer
