
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Feedback from "./feedback";

const About =()=>{
// state to manage feedbacks
   let [feedbacks,setFeedbacks]=useState([])

// state to store feedback
   let [name,setName]=useState("")
   let [company,setCompany]=useState("")
   let [message,setMessage]=useState("")

// useRef to handle unControlled forms

let uname =useRef()
let umessage = useRef()
let ucompany = useRef()

// state to deal with material UI Tabs
   const [value, setValue] = useState(1);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   async function addFeedback(){
       
         
       let response= await axios.post("http://localhost:4500/feedbacks",{
              name:name,company:company,message:message
          })
          readFeedbacks()
   }

   async function addUncontrolledFeedback(){
         let name = uname.current.value
         let company = ucompany.current.value
         let message = umessage.current.value

         let response= await axios.post("http://localhost:4500/feedbacks",{
            name:name,company:company,message:message
        })
        readFeedbacks()

   }

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
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Controlled Component" value="1" />
            <Tab label="UnControlled component" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
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
                <th>Message</th>
                <td><textarea
                style={{height: "70px", width: "600px"}}
                value={message}  
                onChange={(e)=>{setMessage(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><button className="btn btn-primary" onClick={addFeedback}>Send Feedback</button></td>
            </tr>
        </table>
    

        </TabPanel>
        <TabPanel value="2">
        <table>
            <tr>
                <th>Name - uncontrolled</th>
                <td><input type="text" ref={uname} 
                /></td>
            </tr>
            <tr>
                <th>Company -uncontrolled</th>
                <td><input type="text" ref={ucompany}  
                /></td>
            </tr>
            <tr>
                <th>Message -uncontrolled</th>
                <td><textarea
                style={{height: "70px", width: "600px"}}
                ref={umessage}  
                /></td>
            </tr>
            <tr>
                <td><button className="btn btn-dark" onClick={addUncontrolledFeedback}>Send Feedback</button></td>
            </tr>
        </table>

        </TabPanel>
        
      </TabContext>
    </Box>
       </div>
    )
}

export default About