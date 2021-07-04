import React,{useState} from 'react';
import './Modal.css';
import axios from 'axios';
const Modal =  ({show, close}) => { 
    const [input,setInput]= useState({ 
        creator_email :localStorage.getItem('email'),
        title : "",
        tag :"",
        article:"",
        postid:10,
      })

        function onChange(event){
          const {name, value} = event.target;
          console.log("Event ");
          console.log(event);
          console.log(event.target);
    
          setInput(prevInput => {
            return {
              ...prevInput,
              [name]:value
            }
          })
         
        }
    
        function handleSubmit(event){
            event.preventDefault();
            console.log(input);
            const newRecord ={
              
              creator_email : input.creator_email,
              title : input.title,
              tag : input.tag,
              article : input.article, 
              postid:input.postid, 
            }
            axios.post('http://localhost:3001/post',newRecord)
            .then(response => {
              var x= response;
              
              console.log(x);
            })
            close();
        }

  return (
       <div className="modal-wrapper"
       style={{
           transform : show ? 'translateY(0vh)' : 'translateY(-100vh)',
           opacity : show ? '1' : '0'
            }}>
            <div className="modal-header">
                <p>Post your Question </p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
           
            <div className="modal-content">
                <div className="modal-body">
                    <div className="form-group">
                    <label for="usr">Title <span className="star">*</span></label>
                    <input type="text" className="form-control" id="usr" name="title"
                    onChange={ onChange } value={input.title} required></input>
                    </div>
                    <div className="form-group">
                    <label for="comment">Ask your Question / Post an article <span className="star">*</span></label>
                    <textarea className="form-control" rows="4" id="comment" name="article"
                    onChange={ onChange } value={input.articles} placeholder="Ask your question or post an article i.e, It can contain links." required></textarea>
                    </div> 
                    <div className="form-group">
                    <label>Select Category <span className="star">*</span></label>
                    {/* <div className="form-check">  */}
            
                    <input className="form-check-input" type="radio"  name="tag" onChange={ onChange } value="Admissions" id="flexRadioDefault1"></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                    Admissions
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Academics" id="flexRadioDefault2"></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                    Academics
                    </label>
                    {/* <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Library" id="flexRadioDefault3"></input>
                    <label className="form-check-label" for="flexRadioDefault3">
                    Library
                    </label> */}
                    {/* </div> */}
                    
                
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Examination" id="flexRadioDefault4"></input>
                    <label className="form-check-label" for="flexRadioDefault4">
                    Examination
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Campus" id="flexRadioDefault5"></input>
                    <label className="form-check-label" for="flexRadioDefault5">
                    Campus
                    </label>
                   
                    
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Placement" id="flexRadioDefault6"></input>
                    <label className="form-check-label" for="flexRadioDefault6">
                    Placement
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Faculty" id="flexRadioDefault7"></input>
                    <label className="form-check-label" for="flexRadioDefault7">
                    Faculty
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Hostel" id="flexRadioDefault8"></input>
                    <label className="form-check-label" for="flexRadioDefault8">
                    Hostel
                    </label>
                    
                    
                    </div>
                    </div>
            <div className="modal-footer">
               <button type="submit" onClick={handleSubmit} className="btn-success">Submit</button>
                <button onClick={close} className="btn-cancel">Close</button>
            </div>
        </div>
        </div>
    )
};
export default Modal;