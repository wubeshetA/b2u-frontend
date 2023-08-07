import { useState, useEffect } from 'react'

import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from './components/banner/Banner';
import Intro from './components/intro/Intro';
// import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import RegistrationForm from './components/student/Registration';
function App() {
  const [data, setData] = useState(null)


  return (
    <Router className="w-full h-auto bg-bodyColor text-lightText px-0">
      <div className="App">
        <Navbar />
        <Switch className="max-w-screen-xl mx-auto px-4">
          <Route exact path="/">
            <Banner/>
            <Intro/>
            {/* <Partners/> */}
            <Footer/>
          </Route>
          <Route path="/about">
            
          
          </Route>

          <Route path="/apply">
          
          <RegistrationForm/> 
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
