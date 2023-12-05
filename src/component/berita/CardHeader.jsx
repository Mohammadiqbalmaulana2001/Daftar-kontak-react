import React from 'react'

export const CardHeader = ({image,category}) => {
  return (
    <header>
      <h3>{category}</h3>
      <img src={image} />
    </header>
  )
}
