import React from 'react'
import css from "./upcoming.css"
import { Link } from "react-router-dom";
import { Ucard } from "./Ucard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fas fa-chevron-left'></i>
      </button>
    </div>
  ) 
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fas fa-chevron-right'></i>
      </button>
    </div>
  ) 
}

export const Upcoming = ({items, title}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [ 
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ]
      };

  return (
    <>
    <section className='upcome'>

        <div className="container">
            <div className="heading flexSB">
                <h1>{title}</h1>
                <Link to="/">View All</Link>
            </div>

            <div className="content">
            <Slider {...settings}>
                {items.map((item) => {
                    return (
                        <>
                        <Ucard item={item} key={item.id}/>
                        </>
                    )
                })}
            </Slider>

            </div>

        </div>

    </section>
    </>
  )
}
