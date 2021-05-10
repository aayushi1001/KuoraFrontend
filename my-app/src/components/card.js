import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import code from './Code.jpg';
import axios from 'axios';
import Modal from './modal';

// import Route from "react-router-dom/Route";

function Card(props){
    const [show,setShow] = useState(false);

    const closeModalHandler = () => setShow(false);

    function vote(){
        //voter email , poster email ,  postid
        const userObject = {
            voter_email : props.viewer,
            post_email : props.email,
            post_id : props.id,
            rating : 3
        };
        const url = "http://127.0.0.1:3000/vote_get_postemail_postid_voter/" + props.viewer + "/" + props.email + "/" + props.id;
        console.log("from vote" + url)
        fetch(url)
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson.vote.length);
            if(myJson.vote.length == 0){
                axios.post('http://127.0.0.1:3000/vote', userObject)
                .then((res) => {
                console.log(res.data)
                }).catch((error) => {
                console.log(error)
                });
            }
            
          });
    }


    return(
        <div className="card">
            <div className="top">
                <span className = "dot">. . .</span>
                <div className="container">
                    <div className="image">
                        <img className = "picture" src = {code}/>
                    </div>
                    <div className="text">
                        <span>{props.name}</span>
                        {/* <span>{props.star}</span> */}
                        <div className="rate">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle">
                <p>{props.question}</p>
                <p className="tag">{props.tag}</p>
            </div>
            <div className="bottom">

                <button class="like" onClick={vote}>
                <i class='fas fa-thumbs-up'></i>
                </button>

                <span>{props.like}</span>
                <button className="btn-openModal" onClick={() => setShow(true)}><i class='fas fa-comments'></i></button>
                <span>{props.comment}</span>
                <span className="date">{props.dateOfPost}</span>
            </div>
            {/* {show ? <div className="back-drop" onclick={closeModalHandler}></div> : null} */}
            <Modal 
            show={show} 
            closeModalHandler={closeModalHandler} 
            />  
        </div>
    );
}

export default Card;