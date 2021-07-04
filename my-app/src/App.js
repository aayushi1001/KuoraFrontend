import React from 'react'
import Logo from "./icons/logo.png";
import OutlinedButtons from "./components/login_button";
import ContainedButtons from "./components/register_button";
import Route from "react-router-dom/Route";
import "./App.css";
import { BrowserRouter as Router,Switch } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import ReactNotifications from 'react-notifications-component';
//import OutlinedButtons from "./components/login_button";
import Navbar from './components/Navbar';
import Profile_Editable from './components/Profile_Editable'
import Profile from "./components/Profile";
import Main from "./components/main";
import Dashboard from './components/Dashboard';
import Send from './components/Send';
import Front from './components/Front';
const App = () => {
  return (
    <div>
      <ReactNotifications />
    <Router>
      
      <Switch>
    <Route path ="/" exact render={
      () =>{
        return(
          <div>
          <div className="image_div">
            <span><img src="/images/Kiit.png" alt="icon pic" /></span>
            <div>
            <h1 className="mainheading">kiitCommunity</h1>
            <p>An Interactive Web Application</p>
            </div>
            <div className="info">
            <h1 className="divheading">What is kiitCommunity?</h1>
            <p align="justify">This web application tries to bridge that gap by providing an efficient platform for questioning and answering. 

It is an online community to gain and share knowledge, designed especially for the students, faculty members and alumni associates of KIIT university. Here, questions are asked, answered, and reviewed by users. It enables the user to ask a question and get helpful answers and browse quality content, follow credible people and get trustworthy knowledge and also answer questions and share their knowledge. All the questions are categorized in such a way that users can easily search for a related question in a category or place your question in a relevant category.</p>
            <h2>LETS GET STARTED !</h2>
            <OutlinedButtons />
            <ContainedButtons />
            </div>
        </div>
        </div>
        );
      }
    }/>
    <Route path="/signup" exact component={SignUp}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/main"><Main /></Route>
    <Route path="/Dashboard"><Dashboard /></Route>
    <Route path="/edit">
    <Main />
    <Profile_Editable email= {localStorage.getItem("email")} /> 
    </Route>
    <Route path= "/profile" exact >
    <Main />
      <Profile email= {localStorage.getItem("email")}/>
      </Route>
    <Route path= "/Send" exact >
    <Main />
      <Send email= {localStorage.getItem("email")}/>
      </Route>
    
    </Switch>
  </Router>  
  
  </div>
  )
}

export default App;