import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Create(){
    const mover = useNavigate();

    function sendtoHome(){
        mover(`/`);
    }
    function calltoAPI(sname, stime,sid){
      const [calls, setCalls] = useState([]);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({"type":"create", "id":null, "roomid":stime, "name":sname, "time":sid });
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
      fetch("https://p0e8m1xzi3.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).body))
      .catch(error => console.log('error', error));
  }

    return(
      <div className="background">
        <h1>Creating your Reservation</h1>
        <h2>For time, enter time followed by a space, then AM or PM.</h2>
        <h2>Example: 1:00 PM</h2>
        <div><input type="text" placeholder="Enter Room Id" id="id" name="id" ></input></div>
        <div><input type="text" placeholder="Enter Name" id="name" name="name"></input></div>
        <div><input type="text" placeholder="Enter Time" id="time" name="time" ></input></div>
        <button onClick={calltoAPI(document.getElementById('name'), document.getElementById('id'), document.getElementById('time'))}>Submit</button>
        <button className="red-button" onClick={sendtoHome} >Return Home</button>
      </div>
    
    )
}