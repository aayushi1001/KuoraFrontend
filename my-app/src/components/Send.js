import React, { useState , useEffect} from 'react'
import "./Profile_style.css";
import './Modal.css';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';

export default function Send(props) {

    

   
    
    const [fetch_status,setfetch_status]=useState(false);


    const customStyles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content : {
  
          top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        height:'auto'
          //marginRight           : '-50%',
          //transform             : 'translate(-50%, -50%)',
          ///border: '2px solid #fe3a9e',
          //borderRadius: '50px 50px 50px 50px'
        }
      };
  
      const [isOpen, setisOpen] = useState(true);

    
      const [input,setInput]= useState({ 
        creator_email :localStorage.getItem('email'),
        title : "",
        tag :"",
        article:"",
        postid:localStorage.getItem('postcount'),
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
              if(x.data.code===200)
              {
                  var pass=[
                      {"propName": "postcount","value":(parseInt(localStorage.getItem("postcount"))+1)},
                  ];
                  console.log(pass);
                  var ur='http://localhost:3001/register_update/'+localStorage.getItem('email');
                  axios.post(ur,pass)
                    .then(res => {
                        var u= res;
                        if(res.data.nModified>0)
                        {
                            localStorage.setItem('postcount',(parseInt(localStorage.getItem('postcount'))+1));
                        }
                        console.log(u);
                        
            })
              }
              
              console.log(x);
            })
            document.getElementById('closebtn').click();
            //close();
        }
    

      


    



    return (
        <div>

<Modal  style={customStyles} contentLabel="Example Modal" isOpen={isOpen} onRequestClose={()=>{
         // setisOpen(false);
         document.getElementById('closebtn').click();
        }}>

<div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" data-gtm-vis-recent-on-screen-2340190_1525="3721" data-gtm-vis-first-on-screen-2340190_1525="3721" data-gtm-vis-total-visible-time-2340190_1525="100" data-gtm-vis-has-fired-2340190_1525="1">Post SomeThing</h5>
              <Link to ="/Dashboard"><button id="closebtn" type="button" className="btn-light" data-mdb-dismiss="modal" aria-label="Close" onClick={()=>{
                setisOpen(false);
              }}> &nbsp;&nbsp;X&nbsp;&nbsp; </button></Link>
            </div>


            <div className="container emp-profile">
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
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Library" id="flexRadioDefault3"></input>
                    <label className="form-check-label" for="flexRadioDefault3">
                    Library
                    </label>
                    {/* </div> */}
                    
                
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Examinations" id="flexRadioDefault4"></input>
                    <label className="form-check-label" for="flexRadioDefault4">
                    Examinations
                    </label>
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Campus" id="flexRadioDefault5"></input>
                    <label className="form-check-label" for="flexRadioDefault5">
                    Campus
                    </label>
                   
                    
                    <input className="form-check-input" type="radio" name="tag" onChange={ onChange } value="Placement Cell" id="flexRadioDefault6"></input>
                    <label className="form-check-label" for="flexRadioDefault6">
                    Placement Cell
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
                {/* <button onClick={close} className="btn-cancel">Close</button> */}
            </div>
        </div>
            {/* <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                       
                            <img src={pic}  alt="error"/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {name}
                                    </h5>
                                    <h6>
                                       {signupas}
                                    </h6>
                                    <p className="proile-rating">ROLE : <span>{signupas}</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <Link to="/edit" className="profile-edit-btn" >Edit Profile</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{name}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email Id</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{gender}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Mobile no.</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{mobile}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Year</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{year}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Post Count</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{__v}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Tags</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{tag}</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Bio</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{bio}</p>
                                            </div>
                                        </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>            */}
        </div>
        </Modal>
        </div>
    )
}