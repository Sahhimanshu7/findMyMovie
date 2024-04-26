import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-900 min-h-[100vh]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
