import React, { useState } from 'react'
import { Home } from "./Home";
import { homeData } from "../../Assets/Data/data";

export const Homes = () => {

    const [data, setData] = useState(homeData)

  return (
    <>
        <section className="home">
            <Home items={data}/>    
        </section> 
        <div className="margin"></div>
    </>
    

 )
}
