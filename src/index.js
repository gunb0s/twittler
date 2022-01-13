import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { dummyTweetToLS, hashToLS } from './init';

const User = {
  username: "gunbos",
  picture: "https://randomuser.me/api/portraits/men/1.jpg"
}

dummyTweetToLS()
hashToLS()
const dummyTweets = JSON.parse(localStorage.getItem("tweets"))

ReactDOM.render(
  <Router>
    <App 
      dummyTweets={dummyTweets}
      user={User}
    />
  </Router>,
  document.getElementById('root')
);
