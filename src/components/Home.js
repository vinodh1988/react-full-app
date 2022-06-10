import axios from "axios"
import { useEffect, useState } from "react"
import ServiceFeed from "./servicefeed"

const Home =()=>{
    async function readData(){
        let response=null;
        if(type=="All")
        response = await axios.get("http://localhost:4500/serviceFeedbacks")
        else
        response =await axios.get("http://localhost:4500/serviceFeedbacks?type="+type)
        setFeedbacks(response.data)
    }
  
    async function readOptions(){
       let response =await axios.get("http://localhost:4500/options")
        setOptions(response.data)
    }
    const [feedbacks,setFeedbacks]=useState([])
    const [type,setType]=useState("All")
    const [options,setOptions]=useState(["All"])

    useEffect(()=>{
        readData();
    },[type])
    useEffect(()=>{
        readData();
        readOptions();
    },[])
    return(
        <div>
              <h3>Service Feedbacks</h3>
              <select value={type} onChange={(e)=>{
                  setType(e.target.value) }}>
                    {options.map(x=><option key={x}>{x}</option>)}
              </select>
        {
            feedbacks.map(x=><ServiceFeed key={x.id} feedback={x}></ServiceFeed>)
        }
        </div>
    )
}

export default Home