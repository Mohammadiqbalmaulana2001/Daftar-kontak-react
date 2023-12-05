import React from 'react'

export const Product = ({name , price}) => {
  return (
    <div>
        <tr>
            <td>
                {name}
            </td>
            <td>
                {price}
            </td>
        </tr>
    </div>
  )
}
