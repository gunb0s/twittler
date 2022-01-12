import React, { useState } from 'react';
import dummyTweets from './static/dummyData';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러옵니다.

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import About from './Pages/About';
import MyPage from './Pages/MyPage';
// TODO : MyPage, About 컴포넌트를 import 합니다.

import './App.css';
const User = "parkhacker"

const App = (props) => {
  const [tweets, setTweets] = useState(dummyTweets)
  const filteredTweets = tweets.filter(tweet => tweet.username === User);
  const handleTweet = (tweet) => {
    setTweets(tweets => {
      return [
        tweet,
        ...tweets
      ]
    })
  }
  const handleRemove = (id) => {
    setTweets(tweets => {
      return tweets.filter(tweet => tweet.id !== Number(id))
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
          <Switch>
            <Route exact path="/">
              <Tweets 
                tweets={tweets}
                handleTweet={handleTweet}
                handleRemove={handleRemove}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/mypage">
              <MyPage
                my={User}
                tweets={filteredTweets}
                handleRemove={handleRemove}
              />
            </Route>
            {/* TODO : 유어클래스를 참고해서, 테스트 케이스를 통과하세요.
            TODO : React Router DOM 설치 후 BrowserRouter, Route의 주석을 해제하고 Swtich 컴포넌트를 적절하게 작성합니다. */}
          </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
