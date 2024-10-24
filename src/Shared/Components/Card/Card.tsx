import React, { ReactNode } from 'react'
import './Card.scss'

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div className='Card_View'>{children}</div>
  )
}

export default Card