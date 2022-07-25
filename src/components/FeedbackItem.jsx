import {useState} from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item,handleDelete}) {

// const handleDelete = id =>{
//     console.log(id);
// }
  return (

    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={()=>handleDelete(item.id)}>
            <FaTimes/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>

  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}
export default FeedbackItem