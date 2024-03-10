import React from "react";
import "./style.css"; 

export default function Main(){
    return (
        <div className="content1">
        <div className="content2">
            <h1>Watch One Piece <span>Online</span></h1>
        </div>
        <div className="content3">
            <p>
            The original Japanese manga published by Shueisha, the individual chapters are serialized in Weekly Shonen Jump.
            <br></br>One Piece has been reprinted in multiple languages, including English by Viz Media. Located here. The collections for this series have made this the best-selling manga of all-time by a significant margin.
            </p>
        </div>
        <div className="content4">
            <button><a href="https://zorox.to/filter?keyword=one+piece" target="_blank" rel="noopener noreferrer">
                Watch Online</a></button>
            <button><a href="https://www.viz.com/shonenjump" target="_blank" rel="noopener noreferrer">Read Manga</a></button>
        </div>
        </div>
        
    )
}