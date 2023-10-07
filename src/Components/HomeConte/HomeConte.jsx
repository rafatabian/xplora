import "./HomeConte.css"
import plane from "../../assets/plane_done.png"
// import beer from "../../assets/beer_done.png"
import party from "../../assets/party.jpg"
import { useEffect, useState } from "react"

const HomeConte = () => {
    const [currentTime, setCurrentTime] = useState(null)

    useEffect(() => {
        const timeFunction = setInterval(() =>{
     const now = new Date()
     const hours = now.getHours().toString().padStart(2, "0")
     const minutes = now.getMinutes().toString().padStart(2, "0")
     const seconds = now.getSeconds().toString().padStart(2, "0")
     setCurrentTime(`${hours}:${minutes}:${seconds}`)
        }, 1000)
       
       return () => clearInterval(timeFunction)
    }, [])
     
  return (
    < div className="home_main_container">
    <div className="home_first_white"></div>

        <img src={plane} alt="plane" className="plane_image"/>

    <div className="home_people_image"></div>
    <div className="home_second_white">
       <p>A</p>
       <p>D</p>
       <p>V</p>
       <p>E</p>
       <p>N</p>
       <p>T</p>
       <p>U</p>
       <p>R</p>
       <p>E</p>
       <p>!</p>
    </div>

    <section className="home_info_party">
       {/* <img src={party} alt="party" className="party_image"/> */}
        
        <div className="home_text">
            <h2>WHAT'S THE BUZZ</h2>
            <p className="home_text_about">
                XPLORA+ opens up a world of new experiences right in your backyard and shares exciting local happenings. Join a community that's sparking real-world connections.
                The platform makes it easy to discover the hottest events happening in your city, from pop-up dinners to music festivals to fitness classes and more. Simply browse upcoming events based on your interests or let our recommendations surprise you.
            </p>
            <h3>Ready to explore local events and meet new people? Download the XPD app and unlock your city today!</h3>
            <div className="watch">
                <p>COMING SOON</p>
                <div className="watch_frame">
                    <p id="time">{currentTime}</p>
                </div>
                
            </div>
      </div>
      </section> 
     </div>
  )
}

export default HomeConte