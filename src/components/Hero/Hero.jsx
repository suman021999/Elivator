import React from 'react'
import arrow_btn from "../../assets/arrow_btn.png"
import pause_btn from "../../assets/pause_icon.png"
import play_btn from "../../assets/play_icon.png"
import './Hero.css'
const Hero = ({herodata,setHeroCount,heroCount,setPlaystatus,playstatus}) => {
  return (
    <>
      <div className="hreo">
        <div className="hero-text">
          <p>{herodata.text1}</p>
          <p>{herodata.text2}</p>
        </div>
        <div className="hero-explore">
          <p>Explore the features</p>
          <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
          </ul>
          <div className="hero-play">
            <img onClick={()=>setPlaystatus(!playstatus)} src={playstatus?pause_btn:play_btn} alt="" />
            <p>See the video</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
