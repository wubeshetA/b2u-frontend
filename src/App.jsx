import { useState, useEffect } from 'react'

import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from './components/banner/Banner';
import Intro from './components/intro/Intro';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import StudentRegistrationForm from './components/student/Registration';
import MentorRegistrationForm from './components/mentor/Registration';
function App() {
  const [data, setData] = useState(null)


  return (
    <Router className="w-full h-auto bg-bodyColor text-lightText px-0 ">
      <div className="App font-bodyFont">
        <Navbar />
        <Switch className="max-w-screen-xl mx-auto px-4">
          <Route exact path="/">
            <Banner/>
            <Intro/>
            <Partners/>
            
          </Route>
          <Route path="/about">
            
          
          </Route>

          <Route path="/apply">
          
          <StudentRegistrationForm/> 
          </Route>
          <Route path="/mentor">
          
          <MentorRegistrationForm/> 
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
