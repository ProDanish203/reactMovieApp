import React, { useState } from 'react'
import { Homes } from "../Homes/Homes";
import { Upcoming } from "../Upcoming/Upcoming"; 
import { Upcome } from "../../Assets/Data/data";
import { Latest } from "../../Assets/Data/data";
import { Recommended } from "../../Assets/Data/data";
import { Trending } from "../Trending/Trending";
import css from "./home.css"

export const HomePage = () => {

  const [data, setData] = useState(Upcome);
  const [latest, setlatest] = useState(Latest);
  const [recommended, setrecommended] = useState(Recommended)

  return (
    <>
    <Homes/>
    <Upcoming items={data} title="Upcoming Movies"/>
    <Upcoming items={latest} title="Latest Movies"/>
    <Trending/>
    <Upcoming items={recommended} title="Recommended"/>
    </>
  )
}
