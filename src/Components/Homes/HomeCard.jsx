import React from 'react'
import { Link } from "react-router-dom"
import playBtn from "../../Assets/images/play-button.png"
import play from "../../Assets/images/play.png"

export const HomeCard = ({item: {id, cover, name, rating, time, desc, starring, genres, tags, video}}) => {
  return (
    <>
    
    <div className="box">

      <div className="coverImage">
        <img src={cover} alt={name} />
      </div>

      <div className="content flex">

        <div className="details row">

        <h1>{name}</h1>
        <div className="rating flex">
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half'></i>
        </div>

        <label>{rating}</label>
        <span> GP </span>
        <label>{time}</label>

        <p className='desc'>{desc}</p>

        <div className="cast">

        <h4>
          <span>Starring: </span>
          {starring}
        </h4>

        <h4>
          <span>Genres: </span>
          {genres}
        </h4>

        <h4>
          <span>Tags: </span>
          {tags}
        </h4>

      </div>

      <button className='btn btn-flex'>
        <i className='fas fa-play'></i>Play now
      </button>

      </div>

      <div className="playBtn row">
        <Link to={`/singlePage/${id}`}>
          <button>

            <div className="img">
              <img src={playBtn} alt="playBtn" />
              <img src={play} alt="play" className='change'/>
            </div>
            WATCH TRAILER
          </button>
        </Link>
      </div>

      </div>
    </div>

    </>
  )
}
