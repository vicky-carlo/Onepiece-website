import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <div className="frame-1">
        <h4>Most Popular</h4>
        <h4>Movies</h4>
        <h4>TV Series</h4>
      </div>
      <div className="frame-2">
        <h1>ANIME.TV</h1>
      </div>
      <div className="frame-3">
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />
        <h4>Login</h4>
      </div>
    </nav>
  );
}
