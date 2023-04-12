import React from 'react'

export const Ucard = ({ item: {id ,cover, name, time}}) => {
  return (
    <>
    <div className="movieBox">

        <div className="upcomeImg">
            <img src={cover} alt={name} />
        </div>

        <div className="text">
            <h3>{name}</h3>
            <span>{time}</span>
            <br />
            <button className='btn'>
                <i className='fas fa-play'></i> PLAY NOW
            </button>    
        </div>
        

    </div>
    </>
  )
}
