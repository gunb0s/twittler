import React from "react";
import styles from './Response.module.css'

const Response = ({ tweet, kind, onResponseClick }) =>{
    const likeCount = "fa-thumbs-up" in tweet ? tweet["fa-thumbs-up"] : 0

    const dislikeCount = "fa-thumbs-down" in tweet ? tweet["fa-thumbs-down"] : 0

    const handleResponseClick = (event) => {
        onResponseClick(event, tweet.id);
    }

    return (
        <button className={styles.Btn} onClick={handleResponseClick}>
            {
                kind === "Like" ? 
                    <i style={{padding:"0"}} className={`far fa-thumbs-up ${styles.response}`}></i>
                        :
                    <i style={{padding:"0"}} className={`far fa-thumbs-down ${styles.response}`}></i>
            }
            <span className={styles.count}>
            {
                kind === "Like" ? 
                    likeCount
                        :
                    dislikeCount
            }
            </span>
        </button>
    )
}

export default Response
