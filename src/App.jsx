import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import About from './Pages/About';
import MyPage from './Pages/MyPage';

import './App.css';

const App = ({ dummyTweets, user }) => {
  const [tweets, setTweets] = useState(dummyTweets)
  const [hash, setHash] = useState("")
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

  const manageData = (tweet) => {
    let rgx = /#[가-힣0-9a-zA-Z]+/g
    let lsTweets = JSON.parse(localStorage.getItem("tweets"))
    let lsHashs = JSON.parse(localStorage.getItem("hashs"))
    let hashInTweet = tweet.content.match(rgx)
    lsTweets = [tweet, ...lsTweets]
    if (hashInTweet !== null) {
      hashInTweet.forEach(hash => {
        if (!(hash in lsHashs)) {
          lsHashs[hash] = []
        }
        lsHashs[hash].push(tweet.id)
      })
    }
    localStorage.setItem("tweets", JSON.stringify(lsTweets))
    localStorage.setItem("hashs", JSON.stringify(lsHashs))
  }

  const onTweetSubmitClick = (tweet) => {
    setTweets(tweets => {
      return [
        tweet,
        ...tweets
      ]
    })
    manageData(tweet)
  }
  const handleTrashClick = (id) => {
    setTweets(tweets => {
      return tweets.filter(tweet => tweet.id !== Number(id))
    })
  }
  const handleResponseClick = (event, id) => {
    let currTarget = event.currentTarget
    let type = currTarget.children[0].classList[1]

    setTweets(tweets => {
      return tweets.map(tweet => {
        if (tweet.id !== Number(id)) {
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

  const handleTweetChange = (id, msg) => {
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
  const handleHashClick = (hash) => {
    setHash(hash)
  }

  return (
    <div className="App">
      <main>
        <Sidebar onHashClick={handleHashClick}/>
        <section className="features">
        <Switch>
          <Route exact path="/">
            <Tweets 
              user={user}
              tweets={tweets}
              onTweetSubmitClick={onTweetSubmitClick}
              onTrashClick={handleTrashClick}
              onResponseClick={handleResponseClick}
              onTweetChange={handleTweetChange}
              onHashClick={handleHashClick}
            />
          </Route>
          <Route exact path={`/${hash}`}>
            <Tweets 
                user={user}
                tweets={tweets}
                onTweetSubmitClick={onTweetSubmitClick}
                onTrashClick={handleTrashClick}
                onResponseClick={handleResponseClick}
                onTweetChange={handleTweetChange}
                onHashClick={handleHashClick}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mypage">
            <MyPage
              me={user}
              tweets={tweets}
              onTrashClick={handleTrashClick}
              onHashClick={handleHashClick}
            />
          </Route>
        </Switch>
        </section>
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
