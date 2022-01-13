import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러옵니다.

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import About from './Pages/About';
import MyPage from './Pages/MyPage';
// TODO : MyPage, About 컴포넌트를 import 합니다.

import './App.css';

const App = ({ dummyTweets, user }) => {
  const [tweets, setTweets] = useState(dummyTweets)
  const [hash, setHash] = useState("")
  const filteredTweets = tweets.filter(tweet => tweet.username === user.username);
  useEffect(() => {
    let lsTweets = JSON.parse(localStorage.getItem("tweets"))
    if (hash === "") {
      setTweets(lsTweets)
      return
    }
    let hashTweetIds = JSON.parse(localStorage.getItem("hashs"))[hash]
    setTweets(() => {
      return hashTweetIds.map(id => {
        return lsTweets.filter(tweet => tweet.id === id)[0] // ineffiency..
      })
    })
  }, [hash])

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
  const responseClick = (event) => {
    let currTarget = event.currentTarget
    let tweetId = currTarget.parentElement.parentElement.parentElement.id
    let type = currTarget.children[0].classList[1]

    setTweets(tweets => {
      return tweets.map(tweet => {
        if (tweet.id !== Number(tweetId)) {
          return tweet
        } else {
          if (!(type in tweet)) {
            tweet[type] = 0
          }
          tweet[type] = tweet[type] + 1
          return tweet
        }
      })
    })
  }

  const changeTweet = (id, msg) => {
    setTweets(tweets => {
      return tweets.map(tweet => {
        if (tweet.id === Number(id)) {
          tweet["content"] = msg
          return tweet;
        } else {
          return tweet
        }
      })
    })
  }
  const changeHashTweet = (hash) => {
    setHash(hash)
  }

  return (
    <div className="App">
      <main>
        <Sidebar changeHashTweet={changeHashTweet}/>
        <section className="features">
        <Switch>
          <Route exact path="/">
            <Tweets 
              user={user}
              tweets={tweets}
              handleTweet={handleTweet}
              handleRemove={handleRemove}
              responseClick={responseClick}
              changeTweet={changeTweet}
              changeHashTweet={changeHashTweet}
            />
          </Route>
          <Route exact path={`/${hash}`}>
            <Tweets 
                user={user}
                tweets={tweets}
                handleTweet={handleTweet}
                handleRemove={handleRemove}
                responseClick={responseClick}
                changeTweet={changeTweet}
                changeHashTweet={changeHashTweet}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mypage">
            <MyPage
              me={user}
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
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
