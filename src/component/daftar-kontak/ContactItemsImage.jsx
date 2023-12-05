import React from 'react'

export const ContactItemsImage = ({imageUrl}) => {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar"/>
    </div>
  )
}
