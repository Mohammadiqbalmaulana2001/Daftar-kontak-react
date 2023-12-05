import React from 'react'
import { ProductCategory } from './productCategory'
import { Product } from './product'

export const ProductTable = () => {
  return (
    <div className='product-table__container'>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <ProductCategory name="Fruits"/>
            <Product name="Apple" price="10000"/>
            <Product name="Orange" price="20000"/>
            <Product name="Banana" price="30000"/>
            <ProductCategory name="Vegetables"/>
            <Product name="Potato" price="10000"/>
            <Product name="Cabbage" price="20000"/>
            <Product name="Carrot" price="30000"/>
        </table>
    </div>
  ) 
}
