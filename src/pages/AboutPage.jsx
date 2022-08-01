import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <h1>About page</h1>
        <p>This is Feedback App made by React JS</p>

        <Link to='/'>Back to Home</Link>
        </Card>
  )
}

export default AboutPage