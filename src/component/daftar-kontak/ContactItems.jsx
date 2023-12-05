import React from 'react'
import { ContactItemsImage } from './ContactItemsImage'
import { ContactItemsBody } from './ContactItemsBody'
import { DeleteButton } from './DeleteButton'

export const ContactItems = ({name, tag, imageUrl , id, onDelete}) => {
  return (
    <div className='contact-item'>
        <ContactItemsImage imageUrl={imageUrl} />
        <ContactItemsBody name={name} tag={tag} />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}
