import React , { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function detail(){
    function onSuccess(response){
        console.log(response.data.post);
    }

    state = {
        article : ''
    };
    
    axios.get('http://127.0.0.1:3000/post_get')
    .then(function (response) {
        console.log(response.data.post);
        const d = response.data.post;
        this.setState()
       // onSuccess(response)
  })
  .catch(function (error) {
    console.log(error);
  });

}

export default detail;