import React from 'react'
import "./posts.style.css"
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import Comment from "./Comment";
import VoteCount from "./VoteCount";
import CommentCount from "./CommentCount";
import { Link } from 'react-router-dom'
const Posts = (props) => {
    const [state, setState] = useState(false);
    const [idx, setidx] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState();
    const [pic, setPic] = useState();
    const [com, setCom] = useState("");
    const [chk, setChk] = useState(false);

    function checklike(postemail, postid) {
        const url = "http://127.0.0.1:3001/vote_get_postemail_postid_voter/" + localStorage.getItem('email') + "/" + postemail + "/" + postid;
        axios.get(url).then(response => {
            //console.log(response.data.vote.length+"votteeeee");
            if (response.data.vote.length > 0) {
                setChk(true);
            }
            else {
                setChk(false);
            }
        })

    }

    function handleCom(postemail, postid) {
        const newcom = {

            "comment_email": localStorage.getItem('email'),
            "post_email": postemail,
            "post_id": postid,
            "commenttxt": com

        }
        axios.post('http://localhost:3001/comment', newcom)
            .then(response => {
                if (response.data.code === 200) {
                    window.location.reload(false);
                }
            })
    }

    function handleLike(post_email, post_id) {
        const vot = {
            "voter_email": localStorage.getItem('email'),
            "post_email": post_email,
            "post_id": post_id,
            "rating": "5"
        }
        console.log(vot);
        const url = "http://localhost:3001/vote";

        checklike(post_email, post_id);
        if (!chk) {
            axios.post(url, vot).then(response => {
                if (response.data.code === 200) {
                    window.location.reload(false);
                }
            });
        }
    }
    function handleShow() {

        setState(true);
    };

    function handleHide() {
        setState(false);
    };

    function handleShowHide(index) {
        if (state) {
            setidx(null);
            handleHide();
        }
        else {
            setidx(index);
            handleShow();
        }

    }

    function findname(email) {
        console.log(email)
        const url = "http://127.0.0.1:3001/register_get_email/" + email;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                if (myJson.user[0]) {
                    console.log(myJson.user[0].name + " " + myJson.user[0].pic)
                    setName(myJson.user[0].name)
                    setPic(myJson.user[0].pic)
                }
            })
        return name;
    }

    function findpic(email) {
        console.log(email)
        const url = "http://127.0.0.1:3001/register_get_email/" + email;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                if (myJson.user[0]) {
                    console.log(myJson.user[0].name + " " + myJson.user[0].pic)
                    setName(myJson.user[0].name)
                    setPic(myJson.user[0].pic)
                }
            })
        return "http://localhost:3001/" + pic;
    }



    const getData = () => {
        if(props.select==='-1')
        {
        fetch("http://127.0.0.1:3001/post_get")
            .then(function (response) {
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else if(props.select==='10'){
            fetch("http://127.0.0.1:3001/post_get")
            .then(function (response) {
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        } 
        else if(props.select==='0'){
            fetch("http://127.0.0.1:3001/post_get_tag/Academics")
            .then(function (response) {
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }  
        else if(props.select==='1'){
            fetch("http://127.0.0.1:3001/post_get_tag/Admissions")
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else if(props.select==='2'){
            fetch("http://127.0.0.1:3001/post_get_tag/Campus")
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else if(props.select==='3'){
            fetch("http://127.0.0.1:3001/post_get_tag/Hostel")
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else if(props.select==='4'){
            fetch("http://127.0.0.1:3001/post_get_tag/Faculty")
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else if(props.select==='5'){
            fetch("http://127.0.0.1:3001/post_get_tag/Placement")
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else if(props.select==='6'){
            fetch("http://127.0.0.1:3001/post_get_tag/Examination")
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
        else{
            console.log('iiiiiiiii2222'+props.select);
            fetch('http://localhost:3001/search_bar/'+props.select)
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                 console.log(myJson);
                setData(myJson.post)
            });
        }
    }

    useEffect(() => {
        getData()
    }, [props])

    const a = localStorage.getItem('pic');
       
    return (
        
        <div >
            
            <Container>
                <Link to ="/Send">
            <Sharebox>
      <div>
          <img 
          src="/images/share.svg"
          alt=""
          />
          <h2>Post Something</h2>
          {/* <Link to ="/Send"><button><img src="/images/send.svg" height="20px" width="20px" alt=""/>Post</button>
          </Link> */}
      </div>
      </Sharebox>
      </Link>
      <div>
{
       data && 
       data.length>0 && 
       data.map(

        
        (item,index)=>
         <Article>

              <SharedActor>
                  <a>
                      <img src={findpic(item.creator_email)} alt=""/>
                      <div>
                          <span className="title">{item.title}</span>
                          <span className="subtitle">{item.tag}</span>
                          <span className="subtitle">{findname(item.creator_email)}</span>
                      </div>
                  </a>
                  {/* <button>
                      <img src="/images/ellipsis.svg" alt=""/>
                  </button> */}
              </SharedActor>
              <Description>
                  {item.article}
              </Description>
    
              
              <SocialActions>
              <button onClick={()=>handleLike(item.creator_email,item.postid)}>
                    {()=>checklike(item.creator_email,item.postid)}
                    {   
                      <img src="/images/like2.svg"  alt=""/>
                      }
                  <span>{   
                      chk?<span>Already Liked</span>:<span>Like</span>
                      }
                      <VoteCount mail={item.creator_email} postid={item.postid}/>*
                      </span>
              </button>
              <button onClick={()=>handleShowHide(index)}>
                  <img src="/images/comments.svg"  alt=""/>
                  <span>Comments<CommentCount mail={item.creator_email} postid={item.postid}/>*</span>
              </button>


              </SocialActions>

              
                  {state&&idx==index?<Comments>
                      <InputComment>
                            <Form  >
                            <Input
                            nme="com"
                            value={com}
                            placeholder="Start Comment"
                            onChange={(e) => setCom(e.target.value)}
                            ></Input>
                            <Button onClick={()=>handleCom(item.creator_email,item.postid)}>
                                <img src="/images/send.svg" height="18px" width="18px" alt=""/>
                            </Button>
                            </Form>
                      </InputComment>
                      <Comment mail={item.creator_email} postid={item.postid}/>
                      </Comments>:console.log('cant'+index+idx)}
                   
              
             
          </Article>
            )  
        }
      </div>
  </Container>
  </div>
        
    )
}

const Container = styled.div`
  grid-area: main;
  position: relative;
  top: 5vh;
  padding-left: 20px;
  width: 52vw;
  //z-index: -1;
 
`;
const CommonCard = styled.div`
    text-align:center;
    overflow: hidden;
    margin-bottom:8px;
    background-color:#fff;
    border-radius:5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox= styled(CommonCard)`
  display: flex;
  flex-direction: column;
  /* color: #958b7b; */
  
  margin: 0 0 8px;
  background:#4f16d3;
  border-radius:10px;
  align-items:center;
  justify-content:center;
  color:white;
  div{
      h2{
          text-decoration: none;
          margin-top:10px;
          margin-left:10px;
      }
      button{
          padding:10px 20px 10px 20px;
          position:absolute;
          right:10px;
          outline:none;
          color: rgba(0,0,0,0.6);
          font-size:14px;
          line-height:1.5;
          min-height: 48px;
          max-width:220px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          font-weight:600;
      }
      &:first-child{
          display:flex;
          align-items: center;
          padding: 8px 16px 8px 16px;
          img{
              width:50px;
              height:60px;
              border-radius:50%;
              margin-right :8px;
          }
          button{
              margin: 4px 0;
              flex-grow: 1;
              border-radius:35px;
              padding-left:16px;
              padding-right:16px;
              border: 1px solid rgba(0,0,0,0.15);
              border-radius: 35px;
              background-color: white;
              text-align: left;
              img{
                  width:20px;
                  height:20px;
              }
          }
      }
      &:nth-child(2){
          display:flex;
          flex-wrap:wrap;
          justify-content:space-around;
          padding-bottom: 4px;
          button{
              img{
                  margin: 0 4px 0 -2px;
              }
              span{
                  color: #70b5f9;
              }
          }
      }
  }
`;
const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;

`;
const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display:flex;
    *{
        margin-right:2px;
        /* flex-grow:1; */
        overflow: hidden;
        display:flex;
        text-decoration:none; 
        img{
            border-radius:50%;
            width:60px;
            height:60px;
        }
        & > div{
            display: flex;
            flex-direction : column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left:8px;
            overflow: hidden;
            span{
                text-align:left;
                &:first-child{
                    font-size:20px;
                    font-weight:700;
                    color:rgba(0,0,0,0.8);
                } 
                &:nth-child(n+2){
                     font-size:12px;
                     color:rgba(0,0,0,0.6); 
                }
            }
        }
    }
    button{
        position:absolute;
        right:12px;
        top:8px;
        background:transparent;
        border:none;
        outline:none;
        img{
            width:20px;
            height:20px;
        }
    }
`;
const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size:14px;
    text-align: left;
`;

const ShareImg= styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;
const SocialCounts= styled.ul`
    line-height:1.3;
    display: flex;
    align-items: flex-start;
    overflow:auto;
    margin: 0 16px;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li{
        margin-right:5px;
        font-size:12px;
        button{
            background:transparent;
            border: none;
            display:flex;
            img{
                width:16px;
                height:16px;
            }
        }
    }
`;

const SocialActions= styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: flex-start;
    margin:0;
    min-height:40px;
    padding: 4px 8px;
    button{
        background:transparent;
        border:none;
        margin-right:5px;
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: 8px;
        img{
            height: 20px;
            width: 20px;
        }
        span{
            margin-left:2px;
            font-weight: bold;
        }

        @media(min-width: 768px){
            span{
                margin-left:8px;
            }
        }
    }
    button:hover{
        background:#e8eaf6;
    }
`;

const Comments = styled.div`
  margin-bottom:10px;
  padding:0px 0px 20px 0px;
`;
const InputComment = styled.span`
  align-items:center;
`;

const Form = styled.div`
background:white;
border-radius:5px;
//box-shadow: 0 0 6px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  margin: 0px 0px 0px 16px;
  width: 92%;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  p{
    margin-top:10px;
    color:red;
    align-items:center;
  }
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #3f51b5;
  font-weight:bold;
  margin-top: 0.5rem;
  margin-bottom: 0.9rem;
  border-radius: 10px;
  outline: 0;
  border: 2px solid #3f51b5;
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
const Button = styled.button`
    position:absolute;
    right:10px;
    margin-top:16px;
  width:30px;
  padding: 4px 4px;
  //color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  //background: #3f51b5;
  background:transparent;
  border: none;
  border-radius: 5px;
  outline: 0;
  //cursor: pointer;
  //margin-top: 0.6rem;
  //box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1), 2px 1px 2px rgba(0, 0, 0, 0.1);
  //transition: all 0.3s ease-out;
  align-items:center;
  margin-bottom:10px;
`;
export default Posts
