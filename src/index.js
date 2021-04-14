import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Logout from './Logout'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <Logout />
  </React.StrictMode>,
  document.getElementById('root')
);

// function App(){
//   return(
//     <div className="App">
//       <Login />
//       <Logout />
//     </div>
//   )
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
