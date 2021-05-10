import React from 'react';

export const Modal = ({ show , closeModalHandler }) => {
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