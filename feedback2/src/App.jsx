import { useState } from 'react'
import FeedbackData from './data/FeedbackData';
import Feedbacklist from './components/Feedbacklist';
import Header from './components/Header';

import './App.css'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  return (
    <>
    <Header/>
    <div>
        <Feedbacklist feedback={feedback}/>
    </div>

    </>
  )
}

export default App