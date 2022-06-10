import axios from "axios";
import { useEffect, useState } from "react";
import Feedback from "./feedback";

const About =()=>{
   let [feedbacks,setFeedbacks]=useState([])

   let [name,setName]=useState("")
   let [company,setCompany]=useState("")
   let [message,setMessage]=useState("")

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
       <h3> Give us your feedback </h3>
        <table>
            <tr>
                <th>Name</th>
                <td><input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <th>Company</th>
                <td><input type="text" value={company}  onChange={(e)=>{setCompany(e.target.value)}}/></td>
            </tr>
            <tr>
                <th>Name</th>
                <td><textarea
                style={{height: "70px", width: "600px"}}
                value={name}  
                onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><button className="btn btn-primary">Send Feedback</button></td>
            </tr>
        </table>
    </div>
    )
}

export default About