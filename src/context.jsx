import React, { Component, createContext, useEffect, useState } from 'react'
import items from '../index'

export const RoomContext = createContext()


const RoomProvider = ({children}) => {
    const [state, setstate] = useState({
       rooms: [],
       sortedRooms: [],
       featuredRooms: [], 
       loading: true,
       type:'all',
       capacity: 1,
       price: 0,
       minPrice: 0,
       maxPrice: 0,
       minSize: 0,
       maxSize: 0,
       breakfast: false,
       pets: false,
    }) 

    const componentDidMount = () => {
      let rooms = formData(items) 
      let featuredRooms = rooms.filter(room => room.featured === true)
      let maxPrice = Math.max(...rooms.map(item => item.price))
      let maxSize = Math.max(...rooms.map(item => item.size))
      let minSize = Math.min(...rooms.map(item => item.size))
      setstate({
        rooms, featuredRooms,
        sortedRooms: rooms,
        loading:false,
        price: maxPrice,
        maxPrice,
        maxSize,
        minSize
      })
    }
    const formData = (items) => {
      let tempItems = items.map(item => {
        let id = item.sys.id
        let images = item.fields.images.map(image => image.fields.file.url)
        let room = {...item.fields, images, id}
        return room
      })
      return tempItems
    }
    useEffect(() => {
      componentDidMount() 
    }, [])
  

    const getRoom = (slug) => {
      let tempRooms = [...state.rooms]
      const room = tempRooms.find((room) => room.slug === slug)
      return room
    }

    const handleChange = (event) => {
      const target = event.target
      const value = event.type === 'checkbox' ? target.checked :  target.value 
      const name = event.target.name
      console.log(name, value)
      stateUpdatename(name,value)
      
    }
    async function stateUpdatename (name , value){
      
            setstate((prevState) => ({
              ...prevState,
              [name]: value,
            }));

            filterRooms()
          };

    const filterRooms = () => {
      let {rooms, type, capacity,price, minSize, maxSize, breakfast,pets} = state 

      //all the rooms
      let tempRooms = [...rooms]
      //transform value
      capacity = parseInt(capacity)
      price = parseInt(price)

      //filter by type
      if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.type === type)
      }

      //filter by capacity
      if(capacity !== 1){
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
      }
      
      //filter by price
      tempRooms = tempRooms.filter(room => room.price <= price)

      //filter by size
      tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

      //filter by braekfast
      if(breakfast){
        tempRooms = tempRooms.filter(room => room.breakfast === true)
      }

      //filter by pets
      if(pets){
        tempRooms = tempRooms.filter(room => room.pets === true)
      }

      //change state
      setstate({
        sortedRooms: tempRooms
      })
    }
    
  return (
      <RoomContext.Provider value={{...state, getRoom, handleChange}}>
        {children}
      </RoomContext.Provider>    
  )
}

export default RoomProvider
