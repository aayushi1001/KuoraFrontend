import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const CommentCount = (props)=>{
    const [comment, setComment] = useState([]);
    const getComment=()=>{
        var url="http://localhost:3001/comment_get_postemail_postid/"+props.mail+"/"+props.postid;
        fetch(url)
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setComment(myJson.comment)
          });
      }

      useEffect(()=>{
        getComment()
      },[])
    return(
        <span>{comment.length}</span>
     )
};

export default CommentCount;