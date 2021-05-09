import React , { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import details from './details';
import axios from 'axios';

function App(){
    const [data, setData] = useState([]);
    const [name , setName] = useState();
    const [pic , setPic] = useState();
    const [likes , setLikes] = useState();

    function findname(email){
        console.log(email)
        const url = "http://127.0.0.1:3000/register_get_email/" + email;
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
        return name;
    }

    function getLikes(email , id){
        const url = "http://127.0.0.1:3000/vote_get_postemail_postid/" + email + "/" + id;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            if(myJson.vote)
            console.log("Likes" + myJson.vote.length);
        })

        return 200;
    }

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
                like = {getLikes(item.creator_email , item.postid)}
                dislike = {details[0].dislike}
                tag = {item.tag}
                comment = {details[0].comment}
                dateOfPost = {details[0].dateOfPost}
                pic = {pic}
            />
       )
     }
    </div>
            
        </div>
    );
}

export default App;