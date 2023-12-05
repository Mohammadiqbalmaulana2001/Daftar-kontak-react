import React from 'react'
import { Button } from './Button'

export const CardBody = ({ date, title, content, link }) => {
  return (
    <div>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button limk={link}/>
    </div>
  )
}
