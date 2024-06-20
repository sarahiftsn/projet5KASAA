import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Footer from './layout/Footer';
import Banner from './layout/Banner';
import Main from './layout/Main';
import Error from './assets/Pages/Page404';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  
  )
}

export default App
