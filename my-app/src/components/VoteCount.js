import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const VoteCount = (props)=>{
    const [vote, setVote] = useState([]);
    const getVote=()=>{
        var url="http://127.0.0.1:3001/vote_get_postemail_postid/"+props.mail+"/"+props.postid;
        fetch(url)
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setVote(myJson.vote)
          });
      }

      useEffect(()=>{
        getVote()
      },[])
    return(
        <span>{vote.length}</span>
     )
};

export default VoteCount;