import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

const Comment = (props)=>{
    const [comment, setComment] = useState([]);
    const [name , setName] = useState();
    const [pic , setPic] = useState();

    function findname(email){
        console.log(email)
        const url = "http://127.0.0.1:3001/register_get_email/" + email;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            if(myJson.user[0]){
                console.log(myJson.user[0].name + " " + myJson.user[0].pic)
                setName(myJson.user[0].name)
            }
        })
        return name;
    }
    function findpic(email){
        console.log(email)
        const url = "http://127.0.0.1:3001/register_get_email/" + email;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            if(myJson.user[0]){
                console.log(myJson.user[0].name + " " + myJson.user[0].pic)
                setName(myJson.user[0].name)
                setPic(myJson.user[0].pic)
            }
        })
        return "http://localhost:3001/"+pic;
    }
    const getComment=()=>{
        var url="http://localhost:3001/comment_get_postemail_postid/"+props.mail+"/"+props.postid;
        fetch(url)
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson);
            setComment(myJson.comment)
          });
      }

      useEffect(()=>{
        getComment()
      },[])
    return (   
    <div>
       {
       comment && 
       comment.length>0 && 
       comment.map(
        (comments)=>
        <div>
            <Container>
                <Pic><img src={findpic(comments.comment_email)} height="20px" width="20px" alt=""/></Pic>
                <Nam>{findname(comments.comment_email)}</Nam>
                <p>
                <Txt>{comments.commenttxt}</Txt>
                </p>
            </Container>
        </div>
       )}
    </div>
    )
};

const Container = styled.div`
    background:#e8eaf6;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius:10px;
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: flex-start;
    margin:2px 20px 0px 20px;
    min-height:40px;
    padding: 1px 2px ;
`;
const Pic = styled.div`
   img{
       border-radius:50%;
       margin-left:20px;
   }
`;
const Nam = styled.div`

        background:transparent;
        border:none;
        margin-left:10px;
        display: inline-flex;
        align-items: center;
        padding: 2px;
        color: 8px;
        font-size:12px;
        font-weight:bold;

`;
const Txt = styled.div`
font-weight:500;
        background:transparent;
        border:none;
        display: inline-flex;
        align-items: center;
        padding: 8px;
        font-size:10px;
        margin-top:15px;
`;
export default Comment;