import "./Form.css"
import { Link } from "react-router-dom"

const Form = () => {

  return (

    //FORM

    // <div className="from_container">
    //   <h1>Join Us!</h1>

    //   <label for="name">
    //     <p className="form_name">Name</p>
    //     <input id="name" type="text" required/>
    //   </label>
      
    //   <label for="surname">
    //     <p className="form_surname">Surname</p>
    //     <input id="surname" type="text" required/>
    //   </label>

    //   <label for="email">
    //     <p className="form_email">Email Address</p>
    //     <input id="email" tyle="email" required/>
    //   </label>
    //   <button type="submit" onClick={() => alert("working on it")}>Submit</button>


    // </div>
 
    <div className="form_container">
       <h1>Join us!</h1>
       <p className="form_email">Home@xplora.website</p>
       <p>or</p>
       <p>+447542382541</p>

       <Link to="/" className="form_link">Back</Link> 
    </div>
  
  )
}

export default Form