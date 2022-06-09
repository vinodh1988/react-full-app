const ContactBox = ({contact}) => {
    let url = "http://localhost:8090/"+contact.photo;
    console.log(contact)
    return(
<div className="card" style={{width:"400px",float:"left",margin:"10px"}}>
  <img className="card-img-top" src={url} alt="Card image"/>
  <div className="card-body">
    <h4 className="card-title">{contact.title}</h4>
    <p className="card-text">{contact.address},<br/>{contact.city}</p>
  </div>
</div>
    )
}

export default ContactBox;