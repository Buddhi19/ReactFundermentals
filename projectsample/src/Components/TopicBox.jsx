import React from 'react'
import './TopicBox.css'



export default function TopicBox(props) {

  return (
    <div>
        <div className="topicbox">
            <span className='text'>
                {props.Department} Labs
            </span>
            {props.children}
        </div>

        
    </div>
  )
}
