import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';

const MyPage = ({ me, tweets, onTrashClick, onHashClick }) => {
  const filteredTweets = tweets.filter(tweet => tweet.username === me.username);
  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={me.picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {me.username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {filteredTweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} onHashClick={onHashClick} onTrashClick={onTrashClick}/>)}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
