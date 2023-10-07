import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Containers/Home/Home"
import Navbar from "./Containers/Navbar/Navbar"


const App = () => {
  return (
    <div className="app_container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
