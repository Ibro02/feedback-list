import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useState, useEffect} from 'react'
import Button from './shared/Button'
import FeedbackRating from './FeedbackRating'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    const [BtnDisabled, setBtnDisabled] = useState(true);
    const {feedbackEdit, addFeedback, updFeedback} = useContext(FeedbackContext)

   
    useEffect(()=>{
    if (feedbackEdit.edit===true)
    {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    } 
    }, [feedbackEdit])


    const handleTextChange = (e) =>
    {
        setText(e.target.value)

        if(text==='')
        {
        setMessage(null);
        setBtnDisabled(true);
        }
        else if(text!=='' && text.trim().length<=10)
        {
            setMessage("Text must be 10 characters long");
            setBtnDisabled(true);
        }
        else 
        {
            setMessage(null);
            setBtnDisabled(false);
        }
        
    }

    const handleSubmit = e => 
    {
        e.preventDefault()
        if (e.target.length>10)
        { 
        const newFeedback =
        {
            text,
            rating
        }
setText('')
if (feedbackEdit.edit===true)
{
updFeedback(feedbackEdit.item.id, newFeedback)
}
else
{
    addFeedback(newFeedback)
}
    }
    }

  return (
  <Card>
<form onSubmit={handleSubmit}>
    <h2>How would you rate your service with us</h2>
    <FeedbackRating select={(rating) => setRating(rating)}/>
    <div className="input-group">
    <input type="text" placeholder='Write some text' onChange={handleTextChange} value={text} />
<Button type="submit" isDisabled={BtnDisabled} >Send</Button>
    </div>

{message&&<div className='message'>{message}</div>}
</form>
  </Card>
  )
}

export default FeedbackForm
