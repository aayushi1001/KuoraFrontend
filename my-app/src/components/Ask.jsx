import React from 'react'
import Modal from './Modal';
import { useState } from "react";

const Ask = () => {
    const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
    return (
        <div>
           
        <div className="post">
        {/* <p className="question">What is your question or link ?</p> */}
        {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
        <button onClick ={() => setShow(true)} className="btn-openModal">POST</button>
          <Modal show={show} close={closeModalHandler}/>
          </div>
          </div>
  
    )
}

export default Ask
