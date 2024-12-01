import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
  Authenticator
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import Calendar from "react-calendar";

export default function Remove(){
  const mover = useNavigate();
  const mainId = document.getElementById("id"); 

    function sendtoHome(){
        mover(`/`);
    }

    function calltoAPI(){

    }
    return (
      
      <div className="background">
        <h1>Removing your Reservation</h1>
        <div>
        <input type="text" placeholder="Enter Id" id="id" name="id" minLength={1}></input>
        </div>
      <div>
        <button onClick={calltoAPI}>Submit</button>
      </div>
      <div>  
        <button className="red-button" onClick={sendtoHome} >Return Home</button>
      </div>
   
    </div>
  
    )
}