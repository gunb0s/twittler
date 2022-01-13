import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import User from '../Components/User';
import './Tweets.css';

const Tweets = ({ user, tweets, onTweetSubmitClick, onTrashClick, onResponseClick, onTweetChange, onHashClick }) => {
  // const [username, setUsername] = useState("parkhacker")
  const [msg, setMsg] = useState("")
  const [userFilter, setUserFilter] = useState("")

  const handleTweetSubmitClick = () => {
    if (msg === "") return;
    const tweet = {
      id: Date.now(),
      username: user.username,
      picture: user.picture,
      content: msg,
      createdAt: new Date().toISOString()
    };
    onTweetSubmitClick(tweet)
    setMsg("")
  };

  // const handleChangeUser = (event) => {
  //   setUsername(event.target.value)
  // };

  const handleChangeMsg = (event) => {
    setMsg(event.target.value)
  };
  const handleChangeUserFilter = (event) => {
    setUserFilter(event.target.value)
  }
  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src={user.picture} />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <div
                  // type="text"
                  // placeholder="your username here.."
                  // onChange={handleChangeUser}
                  className="tweetForm__input--username"
                >{user.username}</div>
                <textarea
                  placeholder='you message here..'
                  value={msg}
                  onChange={handleChangeMsg}
                  className="tweetForm__input--message"
                />
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  total: {tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button 
                onClick={handleTweetSubmitClick}
                className="tweetForm__submitButton"
              >
                Tweet
              </button> 
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser">
        <select name="user" value={userFilter} onChange={handleChangeUserFilter}>
          <option value=''>"click to filter tweets by username"</option>
          {
            tweets.map(tweet => <User key={tweet.id} tweet={tweet}/>)
          }
        </select>
      </div>
      <ul className="tweets">
        {
          userFilter === '' ? 
            tweets.map(tweet => 
              <Tweet 
                key={tweet.id} 
                tweet={tweet}
                user={user} 
                onTrashClick={onTrashClick}
                onResponseClick={onResponseClick}
                onTweetChange={onTweetChange}
                onHashClick={onHashClick}
              />)
                :
            tweets.filter(tweet => tweet.username === userFilter)
                  .map(tweet => 
                    <Tweet 
                      key={tweet.id} 
                      tweet={tweet}
                      user={user} 
                      onTrashClick={onTrashClick}
                      onResponseClick={onResponseClick}
                      onTweetChange={onTweetChange}
                      onHashClick={onHashClick}
                    />)
        }
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
