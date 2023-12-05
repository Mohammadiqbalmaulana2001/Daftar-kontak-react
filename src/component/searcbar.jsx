import React from 'react'

export const Searcbar = () => {
  return (
    <div>
        <div className="search-bar__container">
            <input type="text" placeholder="Search..." />
            <div className="search-bar__in_stock_checkbox">
                <input type="checkbox" />
                <label>Only show products in stock</label>
            </div>
        </div>
    </div>
  )
}
