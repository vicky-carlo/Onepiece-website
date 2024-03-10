import React from "react"

export default function Hero(props){
    return(
        <div className="hero-container">
            <img src={props.item.img} className="hero-img" />
                <h2 className="hero-title">
                    {props.item.title}
                </h2>
            <p className="hero-about">
                <h4>About:</h4>  {props.item.about}
            </p>
        </div>
    )
}