import React, { createElement } from 'react'
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import Card from './components/shared/Card';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import {NavLink} from 'react-router-dom'
import AboutQuestionMark from './components/AboutQuestionMark'
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

export const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);



  return (
    <FeedbackProvider>

    <Router>

    <Header/>

   <div className='container'>

      <Routes>

<Route exact path='/'
element={
  <>
  <FeedbackForm/>
    <FeedbackStats/>
    <FeedbackList />
  </>
}/>




    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/post' element={<Post/>}/>


      </Routes>
      <Card className="active">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
      </Card>
   </div>

   <AboutQuestionMark/>
    </Router>



  </FeedbackProvider>
  )
}

export default App
