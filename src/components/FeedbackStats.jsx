import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    let rating = feedback.reduce((acc, cur)=>{
   return (acc + cur.rating);
   
},0)
rating = rating.toFixed(1);
  return (
    <div className='feedback-stats'>
   <h4>Rewiew: {feedback.length}</h4>
   <h4>Rating: {isNaN(rating/feedback.length)? 0:rating/feedback.length}</h4>
    </div>
  )
}

export default FeedbackStats
