import React from 'react'
import CardProductComponent from '../CardProductComponent/CardProductComponent'
import { LayoutProduct } from './style'

const LayoutProductHome = ({ProductData}) => {
  return (
    <div>
        <LayoutProduct>
            {ProductData.map((product) => (
                <CardProductComponent key={product.id} product={product}/>
            ))}
      </LayoutProduct>
    </div>
  )
}

export default LayoutProductHome