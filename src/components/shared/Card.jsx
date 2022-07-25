import FeedbackItem from "../FeedbackItem";
import PropTypes from 'prop-types'

import React from 'react'

function Card({children, reverse}) {
  return (
    //  <div className={ `card ${reverse && 'reverse'}`}>
    //  {children}
    //  </div>
   <div className="card" style={reverse? {backgroundColor: 'rgba(0,0,0,0.4)', color: "white"} : {backgroundColor: '#fff'}}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false,
}


Card.propTypes = { 
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired
}
export default Card
