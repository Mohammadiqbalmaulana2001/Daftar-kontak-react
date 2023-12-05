import React from 'react'
import { ContactItems } from './ContactItems'

export const ContactList = ({contacts}) => {
  return (
    <div className='contact-list'>
        {contacts.map((contact) =>(
            <ContactItems 
            key={contact.id}
            id={contact.id}
            {...contact}
            />
        ))
        }
    </div>
  )
}
