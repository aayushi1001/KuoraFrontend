import React , { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import details from './details';
import axios from 'axios';
import Modal from './modal';

function App(){
    const [data, setData] = useState([]);
    const [name , setName] = useState();
    const [pic , setPic] = useState();
    const [likes , setLikes] = useState(0);
    const [comments , setComments] = useState(0);

    function findname(email){
        // console.log(email)
        const url = "http://127.0.0.1:3000/register_get_email/" + email;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            if(myJson.user[0]){
                // console.log(myJson.user[0].name + " " + myJson.user[0].pic)
                setName(myJson.user[0].name)
                setPic(myJson.user[0].pic)
            }
        })
        return name;
    }

    function getlikes(e , i){
        const link1 = "http://127.0.0.1:3000/vote_get_postemail_postid/" + e + "/" + i;
        console.log(link1);
        fetch(link1)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
           setLikes(myJson.vote.length);
        })
        return likes;
    }

    // function getcomments(e1 , i1){
    //     const link2 = "http://127.0.0.1:3000/comment_get_postemail_postid/" + e1 + "/" + i1;
    //     console.log(link2);
    //     fetch(link2)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(myJson){
    //         console.log(myJson.comment);
    //         var n = myJson.comment.length;
    //         return n;
    //     })
    //     .then(res => setComments(res));
    //     return comments;
    // }

    
    const getData=()=>{
        fetch("http://127.0.0.1:3000/post_get")
          .then(function(response){
            // console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            // console.log(myJson);
            setData(myJson.post)
          });
      }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
            {/* <Card 
                name = {details[0].name}
                star = {details[0].star}
                question = {details[0].question}
                like = {details[0].like}
                dislike = {details[0].dislike}
                tag = {details[0].tag}
                comment = {details[0].comment}
                dateOfPost = {details[0].dateOfPost}
                pic = {details[0].pic}
            />
            <Card 
                name = {details[0].name}
                star = {details[0].star}
                question = {details[0].question}
                like = {details[0].like}
                dislike = {details[0].dislike}
                tag = {details[0].tag}
                comment = {details[0].comment}
                dateOfPost = {details[0].dateOfPost}
                pic = {details[0].pic}
            /> */}

<div>
     {
       data && 
       data.length>0 && 
       data.map(
        (item)=>
        
        <Card 
                name = {findname(item.creator_email)}
                star = {details[0].star}
                question = {item.article}
                like = {getlikes(item.creator_email , item.postid)}
                tag = {item.tag}
                comment = {2}
                dateOfPost = {details[0].dateOfPost}
                pic = {pic}
                email = {item.creator_email}
                id = {item.postid}
                viewer = {"aayushi@gmail.com"}
        />
       )
     }
    </div>
          {/* <Modal />   */}
        </div>
    );
}

export default App;