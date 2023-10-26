import "./App.css"
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Containers/Home/Home"
import Navbar from "./Containers/Navbar/Navbar"
import Form from "./Components/Form/Form"

const App = () => {
  return (
    <div className="app_container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
