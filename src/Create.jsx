import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Create(){
    const mover = useNavigate();
    const name = document.getElementById("name");
    const createTime = document.getElementById("time");
    const roomid = document.getElementById("id");

    function sendtoHome(){
        mover(`/`);
    }
    function calltoAPI(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"name":name,"roomid":roomid, "time":createTime, "type":'create'});
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
      fetch("https://obvveyi590.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }

    return(
      <div className="background">
        <h1>Creating your Reservation</h1>
        <h2>For time, enter time followed by a space, then AM or PM.</h2>
        <h2>Example: 1:00 PM</h2>
        <div><input type="text" placeholder="Enter Room Id" id="id" name="id" minLength={1}></input></div>
        <div><input type="text" placeholder="Enter Name" id="name" name="name" minLength={1}></input></div>
        <div><input type="text" placeholder="Enter Time" id="time" name="time" minLength={7}></input></div>
        <button onClick={calltoAPI()}>Submit</button>
        <button className="red-button" onClick={sendtoHome} >Return Home</button>
      </div>
    
    )
}