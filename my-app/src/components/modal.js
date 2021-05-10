import React , { useState , useEffect } from 'react';

export const Modal = ({ show , closeModalHandler ,post_email , post_id}) => {

    //const [comment, setComment] = useState([]);

    // const getData=()=>{
    //     const url = "http://127.0.0.1:3000/comment_get_postemail_postid/" + post_email + "/" + post_id
    //     console.log(url)
    //     fetch(url)
    //       .then(function(response){
    //         // console.log(response)
    //         return response.json();
    //       })
    //       .then(function(myJson) {
    //         console.log(myJson);
    //       });
    //   }

    // useEffect(()=>{
    //     getData()
    // },[])

    if(show){
        const url = "http://127.0.0.1:3000/comment_get_postemail_postid/" + post_email + "/" + post_id;
        console.log(url);
    }

    return (
        <div className="modal-wrapper"
            style={{
                opacity:show ? '1' : '0',
            }}
        >
            <div className="modal-header">
                <p>Comments</p>
                <span className="close-modal-btn" onClick={closeModalHandler}>X</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>A computer is a machine that can store and process information. Most computers rely on a
                        binary system that uses two variables, 0 and 1, to complete tasks such as storing data, 
                        calculating algorithms, and displaying information.
                    </p>
                </div>
                <div className="comment-box">
                    <input className="comment-here" id="comment" placeholder="Write your comment here" type = "text" />
                    <button className="btn-comment">Post</button>
                </div>
                {/* <div className="modal-footer">
                    <button className="btn-cancel">Close</button>
                </div> */}
            </div>
        </div>
    )
}

export default Modal;