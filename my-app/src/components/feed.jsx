import React from 'react'
import Ask from './Ask'
import Posts from './posts'
const Feed = () => {
    return (
        <>
        <div className="feed">
          <Ask />
          <Posts />
          {/*<Profile_Manager account_email={localStorage.getItem("email")}/>*/}
        </div>
        </>
    )
}

export default Feed
