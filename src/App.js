import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Hero from "./components/Hero"
import data from "./data"
import Videocomponent from "./components/videocomponent"



export default function App(){
    const Herocomponents = data.map(item=>{
        return (
        <Hero 
        key={item.id}
        item={item}
        />
        )
    })
    return (
        <div>
            <Navbar/>
            <Main/>
            <section className="hero-cards">
                {Herocomponents}
            </section>
            <Videocomponent/>
        </div>
    )
}