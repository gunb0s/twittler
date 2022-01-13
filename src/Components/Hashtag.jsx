import React from "react";
import { Link } from "react-router-dom";
import "./Hashtag.css"

const Hashtag = ({ value, onHashClick }) => {
    const handleHashClick = () => {
        onHashClick(value)
    }
    return (
        <Link to={`/${value}`} onClick={handleHashClick}>
            <span className="hashtag">{value}</span>
        </Link>
    )
}

export default Hashtag