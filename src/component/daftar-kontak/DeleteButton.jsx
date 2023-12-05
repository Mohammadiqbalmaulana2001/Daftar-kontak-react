import React from 'react'

export const DeleteButton = ({id , onDelete}) => {
  return (
    <div>
        <button className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
    </div>
  )
}
