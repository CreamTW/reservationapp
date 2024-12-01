import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

export default function Remove(){
  const mover = useNavigate();

    function sendtoHome(){
        mover(`/`);
    }

    return (
      <div className="background">
        <h1>Removing your Reservation</h1>
      <button className="red-button" onClick={sendtoHome} >Return Home</button>
    </div>
  
    )
}