import React from 'react'

const User = ({ tweet }) => {
    return (
        <option value={tweet.username}>{tweet.username}</option>
    )
}

export default User;