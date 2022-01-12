import React, { useState } from 'react';
import Response from './Response';
import './Tweet.css';

const Tweet = ({ tweet, user, handleClick, responseClick, changeTweet }) => {
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
  const handleChange = (event) => {
    setMsg(event.target.value)
    changeTweet(tweet.id, msg)
  }

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            {/* TODO : 유져 이름이 있어야 합니다. */}
            <span className="tweet__username">{tweet.username}</span>
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
            <span className="tweet__createdAt">{parsedDate}</span>
            <span className="tweet__remove" id={tweet.id} onClick={handleClick}>
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
              {/* TODO : 트윗 메세지가 있어야 합니다. */}
              {msg}
            </div>
            :
            <textarea
              value={msg}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="tweet__message--edit"
            >
            </textarea>
        }
        <div className="tweet__response">
          <Response tweet={tweet} kind={"Like"} onClick={responseClick}/>
          <Response tweet={tweet} kind={"Dislike"} onClick={responseClick}/>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
