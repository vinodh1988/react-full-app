import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../context";
import ServiceFeed from "./servicefeed"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    let {services,addServices}=useContext(Context)
    let [servicelist,setServicelist]=useState(services);

    useEffect(()=>{
        readData();
    },[type])
    useEffect(()=>{
        readData();
        readOptions();
    },[])
    return(
        <div>
            <h3> Our Services</h3>
            {
                servicelist.map(x=><div className="alert alert-info">{x}</div>)
            }
              <h3>Service Feedbacks</h3>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Service"
          value={type} onChange={(e)=>{
                  setType(e.target.value) }}>
                    {options.map(x=><MenuItem key={x} value={x}>{x}</MenuItem>)}
              </Select>
    </FormControl>
        {
            feedbacks.map(x=><ServiceFeed key={x.id} feedback={x}></ServiceFeed>)
        }
        </div>
    )
}

export default Home