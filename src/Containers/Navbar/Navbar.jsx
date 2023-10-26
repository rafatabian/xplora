import { useEffect, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import logo from "../../assets/x_loog.png"
import Dropdown from "../../Components/Dropdown/Dropdown"

const Navbar = () => {
    const [mobile, setMobile] = useState(null)
    const [pc,  setPc] = useState(null)
    const [showMenu, setShowMenu] = useState(null)
    // hovering linkis states
    const [about, setAbout] = useState(null)
    const [events, setEvents] = useState(null)
    const [contact, setContact] = useState(null)

    // data for dropdown
const aData = {
  head: "Your City's Vibrant Events and Friends Await",
  title: "Discover:",
  p: [
    "Hot new pop-up dinners",
    "Weekend music festivals",
    "Yoga in the park",
    "Salsa dancing nights",
    "Volleyball tournaments",
    "And more amazing local happenings!"
  ]
}
const eData = {
  head: "Your favourite events are here",
  title: "Connect and Join",
  p: [
    "Meet others excited about the same events",
    "Form groups to attend together",
    "Chat and make plans",
    "Split costs easily",
    "Attend unique events as a community",
    "Bond over your shared passions",
    "Spark new friendship and romance"
  ]
}
const cData = {
  head: "Keep in touch with us!",
  title: "Contact us",
  p : [
    "Via email:",
    "Home@xplora.website",
    "Via call:",
    "+447542382541"
]
}

    // check if is a mobilephone
    useEffect(() => {
        const windowWidth = window.innerWidth
        if(windowWidth < 570){
          setMobile(true)
        }else{
         setPc(true)
        }
    }, [])

    const handleMenuClick = (e) => {
      if(e === "open"){
      setShowMenu(true)
      }else{
        setShowMenu(false)
      }
    }
    // make menu pop up when hovering links
    const handleHover = (e) => {
      const navbar = document.querySelector(".navbar_and_name_conteiner")
      if(navbar && e === "about" || e === "events" || e === "contact"){
        navbar.classList.add("navbar_background_white")
      }else{
        navbar.classList.remove("navbar_background_white")
      }
      // if is mobile
      if(mobile){
        setShowMenu(false)
      }
        if(e === "about"){
          setAbout(true)
        }else{
          setAbout(false)
        }
         if(e === "events"){
          setEvents(true)
        }else{
          setEvents(false)
        }
        if(e === "contact"){
          setContact(true)
        }else{
          setContact(false)
        }
    }

 
  return (
    <div className="navbar_and_name_conteiner">
         <div className="navbar_name">
          <img className="navbar_logo" src={logo} alt="logo" />
            {/* <h1 className="xplora_name">xplora+</h1> */}
         </div>
         <div className="navbar_container">
            <div className="navbar_links" style={{border: `${mobile ? "none" : ""}`}}>
              {mobile 
              ?<FiMenu onClick={() => handleMenuClick("open")}/>
              : ""}
            
              <div className={`${showMenu ? "toggle_mobile_menu" : pc ? "normal_menu" : "hyde_menu"}`}>
                {showMenu ? <IoClose onClick={() => handleMenuClick("close")}/> : ""}
                <Link to="/" className="home_svg">HOME</Link>
                <Link to="/" onMouseOver={() =>handleHover("about")} onMouseLeave={handleHover} onClick={() => handleHover("about")}>ABOUT</Link>
                <Link to="/" onMouseOver={() => handleHover("events")} onMouseLeave={handleHover} onClick={() => handleHover("events")}>EVENTS</Link>
                <Link to="/" onMouseOver={() => handleHover("contact")} onMouseLeave={handleHover} onClick={() => handleHover("contact")}>CONTACT</Link>
              </div>
            </div>
         </div>

         {about && <Dropdown props={aData}/>}
         {events && <Dropdown props={eData}/>}
         {contact && <Dropdown props={cData}/>}
    </div>
    
  )
}

export default Navbar