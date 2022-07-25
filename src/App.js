import React, { createElement } from 'react'
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import FeedbackStats from './components/FeedbackStats';

export const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
const deleteFeedback = (id) =>
{
  console.log(id);
if (window.confirm("Are you sure that you want to delete this feedback?"))
{ 
  setFeedback(feedback.filter((item)=> item.id !== id ))
}
}
  return (
    <>
    <Header/>
   <div className='container'>
    <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
   </div>
    </>
  )
}

export default App
