import React, { useState } from 'react';
import Response from './Response';
import './Tweet.css';
import Hashtag from './Hashtag';

const Tweet = ({ tweet, user, onTrashClick, onResponseClick, onTweetChange, onHashClick }) => {
  const [isEditable, setIsEditable] = useState(false)
  const [msg, setMsg] = useState(tweet.content)
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');
  const handleDoubleClick = () =>{
    if (tweet.username === user.username)
     setIsEditable(true);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter")
      setIsEditable(false);
  }
  const handleTweetChange = (event) => {
    setMsg(event.target.value)
    onTweetChange(tweet.id, msg)
  }
  const handleTrashClick = () => {
    onTrashClick(tweet.id)
  }
  const renderHashtag = (msg) => {
    let match;
    let idx = 0
    let output = []
    let rgx = /#[가-힣0-9a-zA-Z]+/g
    
    while ((match = rgx.exec(msg)) != null) {
        output.push(msg.slice(idx, match.index))

        let hash = msg.slice(match.index, rgx.lastIndex)
        output.push(<Hashtag onHashClick={onHashClick} key={idx} value={hash}/>)
        idx = rgx.lastIndex
    }
    output.push(msg.slice(idx, msg.length))
    return output
  }
  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <span className="tweet__username">{tweet.username}</span>
            <span className="tweet__createdAt">{parsedDate}</span>
            <span className="tweet__remove" onClick={handleTrashClick}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </div>
        {
          !isEditable ?
            <div
              onDoubleClick={handleDoubleClick}
              className="tweet__message"
            >
              {renderHashtag(msg)}
            </div>
            :
            <textarea
              value={msg}
              onChange={handleTweetChange}
              onKeyDown={handleKeyDown}
              className="tweet__message--edit"
            >
            </textarea>
        }
        <div className="tweet__hashtags">
        </div>
        <div className="tweet__response">
          <Response tweet={tweet} kind={"Like"} onResponseClick={onResponseClick}/>
          <Response tweet={tweet} kind={"Dislike"} onResponseClick={onResponseClick}/>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
