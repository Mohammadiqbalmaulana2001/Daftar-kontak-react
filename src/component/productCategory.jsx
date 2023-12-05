import React from 'react'

export const ProductCategory = ({name}) => {
  return (
    <div>
        <tr>
            <td colSpan={2}>
                {name}
            </td>
        </tr>
    </div>
  )
}
