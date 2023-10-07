import "./Dropdown.css"

const Dropdown = ({ props }) => {

  return (
        <div className="dropdown_container" >
             <h1>{props.head}</h1>
             <h2>{props.title}</h2>
             <ul>
                <li>{props.p[0]}</li>
                <li>{props.p[1]}</li>
                <li>{props.p[2]}</li>
                <li>{props.p[3]}</li>
                <li>{props.p[4]}</li>
                <li>{props.p[5]}</li>
                <li>{props.p[6]}</li>
             </ul>
        </div>
  )
}

export default Dropdown