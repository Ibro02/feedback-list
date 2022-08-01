import React from 'react'
import PropTypes from 'prop-types'
import {useState, useEffect,useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackForm from './FeedbackForm'

function FeedbackRating({select}) {
  
  
  const [selected, setSelected] = useState(10)
  const {feedbackEdit} = useContext(FeedbackContext)


  useEffect(()=>
  {
    if (feedbackEdit.edit===true)
    {
      
      // console.log(feedbackEdit.item.rating)
      setSelected(feedbackEdit.item.rating)
      
    }
  }, 
  [feedbackEdit])

  const handleChange=e=>
  {
    if (+e.target.value)
    setSelected(+e.target.value);
    select(+e.target.value);
  }
  

  return (
    <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
  )
}

export default FeedbackRating