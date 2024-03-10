import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; 

export default function body(){
    return(
        <div className="body-text">
        <div className="topic-text">
            <div className="topic-text-head">
           <h2>#1 Most Popular</h2>
           </div>
           <div className="topic1-head">
            <h1>CHAINSAW MAN</h1>
           </div>
           <div className="" style={{width: '100%', color: 'rgba(248, 247, 249, 0.75)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Denji 
           has a simple dream—to live a happy and peaceful life, 
           spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into 
killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a ...<br/></div>
        <div className="stars">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
            <button>Watch Now</button>
        </div>
        </div>
    )
}