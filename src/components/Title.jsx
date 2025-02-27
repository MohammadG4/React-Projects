import React from 'react'
import "./Title.css"
export const Title = ({func}) => {
  return (
    <div className='titleMain'>
      <h1>To Do List</h1>
      <button onClick={func}>Add New Task</button>
      
      </div>
  )
}
