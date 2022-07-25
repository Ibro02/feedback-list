import {useState} from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'


function FeedbackList({feedback, handleDelete}) {
   
    return (
        <div className="feedback-list">
{ 
        feedback.map((item)=>
        (

            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>        
            ) 
        )
    }
        </div>
    );

}



export default FeedbackList