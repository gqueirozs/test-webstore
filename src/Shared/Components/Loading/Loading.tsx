import React from 'react'
import './Loading.scss'

const Loading = ({relative}:{relative?:boolean}) => {
  return (
    <div className={`Loading_Container ${relative ? 'Relative' : ''}`}> 
      <div></div>
    </div>
  )
}

export default Loading