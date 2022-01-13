// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import User from '../Components/User';
import './Tweets.css';

const Tweets = ({ user, tweets, onTweetSubmitClick, onTrashClick, onResponseClick, onTweetChange, onHashClick }) => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
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
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    onTweetSubmitClick(tweet)
    setMsg("")
  };

  // const handleChangeUser = (event) => {
  //   // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  //   setUsername(event.target.value)
  // };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
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
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  placeholder='you message here..'
                  value={msg}
                  onChange={handleChangeMsg}
                  className="tweetForm__input--message"
                />
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  total: {tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
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
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
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
