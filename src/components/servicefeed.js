const ServiceFeed = ({feedback})=>{
    return (
        <div className="feedback">
              <h3>{feedback.name} on {feedback.type} .....</h3>
              <p>
                  {feedback.message}
              </p>
        </div>
    )
}

export default ServiceFeed