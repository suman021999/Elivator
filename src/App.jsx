import { useEffect, useState } from "react"
import Herodata from "../Herodata"
import Background from "./components/Background/Background"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
const App = () => {
   let herodata = Herodata
   const [heroCount,setHeroCount]=useState(0)

   const [playstatus,setPlaystatus]=useState(false)

   useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000)
   },[])
  return (
    <>
      <Background playstatus={playstatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero setPlaystatus={setPlaystatus} herodata={herodata[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playstatus={playstatus}/>
    </>
  )
}

export default App
