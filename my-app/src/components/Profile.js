import React, { useState , useEffect} from 'react'
import "./Profile_style.css";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

export default function Profile(props) {

    

    // const [name,setName]=useState(props.name);
    // const [email,setEmail]=useState(props.email);
    // const [password,setPassword]=useState(props.password);
    // const [gender,setGender]=useState(props.gender);
    // const [bio,setBio]=useState(props.bio);
    // const [year,setYear]=useState(props.year);
    // const [signupas,setSignupas]=useState(props.signupas);
    // const [pic,setPic]=useState(props.pic);
    // const [tag,setTag]=useState(props.tag);
    // const [__v,set__V]=useState(props.__v);
    // const [id,setId]=useState(props.id);
    // const [mobile,setMobile]=useState(props.mobile);

    const [name,setName]=useState('Loading..');
    const [email,setEmail]=useState('Loading..');
    const [password,setPassword]=useState('Loading..');
    const [gender,setGender]=useState('Loading..');
    const [bio,setBio]=useState('Loading..');
    const [year,setYear]=useState('Loading..');
    const [signupas,setSignupas]=useState('Loading..');
    const [pic,setPic]=useState('Loading..');
    const [tag,setTag]=useState('Loading..');
    const [__v,set__V]=useState('Loading..');
    const [id,setId]=useState('Loading..');
    const [mobile,setMobile]=useState('Loading..');
    
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

    useEffect(() => {
        console.log('use effect ran');
        
        fetch('http://localhost:3001/register_get_email/'+props.email)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setName(data.user[0].name);
            setEmail(data.user[0].email);
            setGender(data.user[0].gender);
            setId(data.user[0].id);
            setMobile(data.user[0].mobno);
            setPassword(data.user[0].password);
            setPic("http://localhost:3001/"+data.user[0].pic);
            //setPic(data.user[0].pic);
            setTag(data.user[0].tag);
            setYear(data.user[0].year);
            set__V(data.user[0].__v);
            setBio(data.user[0].bio);
            setSignupas(data.user[0].signupas);
            console.log(data);

            setfetch_status(true);
            
            
          })
      }, [])
    
    

      


    



    return (
        <div>

<Modal  style={customStyles} contentLabel="Example Modal" isOpen={isOpen} onRequestClose={()=>{
         // setisOpen(false);
         document.getElementById('closebtn').click();
        }}>

<div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" data-gtm-vis-recent-on-screen-2340190_1525="3721" data-gtm-vis-first-on-screen-2340190_1525="3721" data-gtm-vis-total-visible-time-2340190_1525="100" data-gtm-vis-has-fired-2340190_1525="1">My Profile 😊 </h5>
              <Link to ="/Dashboard"><button id="closebtn" type="button" className="btn-light" data-mdb-dismiss="modal" aria-label="Close" onClick={()=>{
                setisOpen(false);
              }}> &nbsp;&nbsp;X&nbsp;&nbsp; </button></Link>
            </div>


            <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" */}
                            <img src={pic}  alt="error"/>
                            {/* <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
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
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Bio</a>
                                </li> */}
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
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Password</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{password}</p>
                                            </div>
                                        </div> */}
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
            </form>           
        </div>
        </Modal>
        </div>
    )
}