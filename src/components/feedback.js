import { render } from "@testing-library/react"

const Feedback = ({feedback})=>{
    return (
        <div className="feedback">
              <h3>{feedback.name} from {feedback.company} .....</h3>
              <p>
                  {feedback.message}
              </p>
        </div>
    )
}

export default Feedback;