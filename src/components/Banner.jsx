import React from 'react'

const Banner = ({children, title, subtititle}) => {
  return (
    <div className='banner'>
      <h1>{title}</h1>
      <div></div>
      <p>{subtititle}</p>
      {children}
    </div>
  )
}

export default Banner
