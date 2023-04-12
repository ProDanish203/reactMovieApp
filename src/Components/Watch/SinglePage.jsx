import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import css from "./SinglePage.css"
import { homeData } from "../../Assets/Data/data";
import { Recommended } from "../../Assets/Data/data";
import { Upcoming } from "../Upcoming/Upcoming";

export const SinglePage = () => {

    const {id} = useParams();
    const [item, setitem] = useState(null)
    const [recommended, setrecommended] = useState(Recommended)

    useEffect(() => {

        let item = homeData.find((item) => item.id === parseInt(id))
        if(item){
            setitem(item)
        }

    }, [id])

  return (
    <>
    
    {item ? (
        <>
        <section className='singlePage'>

            <div className="singleHeading">
                <h1>{item.name}</h1>
                <span> &nbsp; | {item.time} | </span> <span>HD</span>
            </div>

            <div className="container">
                <video src={item.video} controls></video>
                <div className="para">
                    <h3>{item.desc}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in facere quos minus delectus exercitationem veniam, autem tempore laudantium odit. Tempore veritatis eaque eligendi aliquid fugiat error voluptatum libero dolor.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in facere quos minus delectus exercitationem veniam, autem tempore laudantium odit. Tempore veritatis eaque eligendi aliquid fugiat error voluptatum libero dolor.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in facere quos minus delectus exercitationem veniam, autem tempore laudantium odit. Tempore veritatis eaque eligendi aliquid fugiat error voluptatum libero dolor.
                    </p>
                </div>

            <div className="social">
                <h3>Share: </h3>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-instagram'></i>
            </div>

            </div>

        </section>

        <Upcoming items={recommended} title="Recommended"/>

        </>
    ) : null}

    </>
  )
}
