import "./Footer.css"
import { Link } from "react-router-dom"
import eating from "../../assets/eating_done.png"
import apple from "../../assets/apple.png"
import android from "../../assets/android_store.png"

const Footer = () => {
  return (
    <div className="footer_div">

      <div className="footer_go_to">
        <h3>Donwload the app</h3>
        <div className="footer_links_for_store">
          <Link to="https://play.google.com/store/apps/details?id=com.xplora.app&hl=en&gl=US" >
            <img className="android_image" src={android} alt="android store" />
          </Link>
          <Link to="" >
            <img className="apple_image" src={apple} alt="apple store" />
          </Link>
          </div>

          <div className="footer_links">
        <Link to="/">The app</Link>
        <Link to="/">FAQ's</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/form">Join the Team</Link>
      </div>

        <p>&#169; 2023 Xplora | All Rights Reserved</p>
      </div>
      <img className="footer_eating_image" src={eating} alt="eating"/>
    </div>
  )
}

export default Footer