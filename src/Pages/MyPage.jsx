import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';

const MyPage = ({ my, tweets, handleRemove }) => {
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다.
  const handleTrashClick = (event) => {
    let id = event.currentTarget.id
    handleRemove(id)
  }
  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={"https://randomuser.me/api/portraits/men/98.jpg"} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {my} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 parkhacker의 트윗만 보여줘야 합니다. */}
        {tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} handleClick={handleTrashClick}/>)}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
