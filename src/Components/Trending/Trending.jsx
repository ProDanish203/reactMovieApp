import React, { useState } from 'react'
import css from "./Trending.css"
import { trending } from "../../Assets/Data/data";
import { Home } from "../Homes/Home";


export const Trending = () => {

  const [data, setdata] = useState(trending)

  return (
    <>
    <section className="trending">
          <Home items={data}/>    
    </section> 
    </>
  )
}
