import React from 'react'
import FeedbackItem from './FeedbackItem'

const Feedbacklist = ({feedback}) => {
    if (!feedback  || feedback.length === 0 ){
        return <p>No Feedback yet</p>
    }
  return (
    <div className='feedback-list direction'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item}  />
        ))}
      
    </div>
  )
}

export default Feedbacklist;
