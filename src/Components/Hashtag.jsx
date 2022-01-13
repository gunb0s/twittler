import React from "react";
import { Link } from "react-router-dom";
import "./Hashtag.css"

const Hashtag = ({ value, handleHashClick }) => {
    const onClick = () => {
        handleHashClick(value)
    }
    return (
        <Link to={`/${value}`} onClick={onClick}>
            <span className="hashtag">{value}</span>
        </Link>
    )
}

export default Hashtag