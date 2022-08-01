import React from 'react'
import {useParams} from 'react-router-dom'
import Card from './shared/Card';
import {Navigate, useNavigate} from 'react-router-dom'
function Post() {
    const params = useParams();

const status = 200; 

const navigate = useNavigate();

const onClick = () =>
{
    alert("Hello World")
    navigate('/')
}
if (status === 404)
{
    return (
        <Navigate to="/notfound"/>
    )
}
  return (
    <Card>
      <h1>Post: {params.id}</h1>
      <p>Name: {params.name}</p>
      <button onClick={onClick}>click me</button>
    </Card>
  )
}

export default Post
