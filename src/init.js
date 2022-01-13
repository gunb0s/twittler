import dummyTweets from './static/dummyData';

// to store array in local storage use JSON.stringify
// to return array from local storage use JSON.parse
/**
 * ! Tweet State
 * key: "tweets"
 * value:
 * [{
 *      id:
 *      username:
 *      picture:
 *      content:
 *      createdAt:
 *      updatedAt:
 * }...] 
 * */ 
const dummyTweetToLS = () => {
    localStorage.setItem("tweets", JSON.stringify(dummyTweets))
}
/**
 * ! Hash State
 * key: "hashs"
 * value: 
 * {
 *      "hash1": [id...],
 *      ...
 * }
 */
const hashToLS = () => {
    let rgx = /#[가-힣0-9a-zA-Z]+/g
    let hashStates = new Object()
    dummyTweets.forEach(tweets => {
        let hashs = tweets.content.match(rgx)
        for (let hash of hashs) {
            if (!(hash in hashStates)) {
                hashStates[hash] = []
            }
            hashStates[hash].push(tweets.id)
        }
    })
    localStorage.setItem("hashs", JSON.stringify(hashStates))
}

export { dummyTweetToLS, hashToLS } 