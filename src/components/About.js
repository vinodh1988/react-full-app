import axios from "axios";
import { useEffect, useState } from "react";
import Feedback from "./feedback";

const About =()=>{
   let [feedbacks,setFeedbacks]=useState([])
   async function readFeedbacks(){
       let response = await axios.get("http://localhost:4500/feedbacks");
       setFeedbacks(response.data)
   }

   useEffect(
       ()=>{
           readFeedbacks()
       }
   )
    return(
    <div style={{padding: "20px",  textAlign: "justify"}}>
        <h1>About us</h1>
        <p>
           Actually content about us need to be kept here.Actually content about us need to be kept here.
           Actually content about us need to be kept here.
           Actually content about us need to be kept here.
           Actually content about us need to be kept here.
           Actually content about us need to be kept here.
           Actually content about us need to be kept here.
           Actually content about us need to be kept here.
           Actually content about us need to be kept here.
        </p>
        <h3>Feedbacks</h3>
        {
            feedbacks.map(x=><Feedback feedback={x}></Feedback>)
        }
    </div>
    )
}

export default About