import React from 'react';
import ReactDOM from 'react-dom';
import code from './Code.jpg';

// import Route from "react-router-dom/Route";

function Card(props){



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
                <button class="like">
                <i class='fas fa-thumbs-up'></i>
                </button>
                <span>{props.like}</span>
                {/* <button class="dislike">
                <i class='fas fa-thumbs-down'></i>
                </button>
                <span>{props.dislike}</span> */}
                <button><i class='fas fa-comments'></i></button>
                <span>{props.comment}</span>
                <span className="date">{props.dateOfPost}</span>
            </div>
        </div>
    );
}

export default Card;