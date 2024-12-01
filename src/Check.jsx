import { useState, useEffect } from "react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

export default function Check(){
    const mover = useNavigate();  

    function sendtoHome(){
        mover(`/`);
    }
    return(
      <div className="background">
        <h1>Checking your Reservation</h1>
        <button className="red-button" onClick={sendtoHome} >Return Home</button>
      </div>
    
    )
}