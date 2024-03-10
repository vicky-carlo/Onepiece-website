import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones} from '@fortawesome/free-solid-svg-icons';

import "./style.css"; 

export default function Navbar(){
    return (
        <div className="nav1">
        <div className="icon">
        <FontAwesomeIcon icon={faSkullCrossbones} />
        </div>
        
        <div className="navbar-text">
            <p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Lets Ship
      </a>
            </p>
            <button>Sail Up
        <div class="arrow-wrapper">
        <div class="arrow"></div>
        </div></button>
        </div>
        </div>
        

    )
}