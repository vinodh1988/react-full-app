import axios from 'axios'
import { useEffect,useState } from 'react'
import ContactBox from './ContactBox'
const Contact =()=>{
    async function readData(){
        let response = await axios.get("http://localhost:4500/contacts")
        setContacts(response.data)
    }
    useEffect(
        ()=>{
            readData()
        },[]
    )
       
    const [contacts,setContacts]=useState([])

    return(
    <div>
        {
            contacts.map(x=><ContactBox key={x.title} contact={x}></ContactBox>)
        }
    </div>
    )
}

export default Contact