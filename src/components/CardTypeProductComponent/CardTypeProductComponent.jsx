import React from 'react'
import { TypeProduct } from './style'

const CardTypeProductComponent = ({typeProducts}) => {
    console.log('first', typeProducts)
  return (
    <div>
        <TypeProduct>
            <div className="type-products_img">
                <img  alt=""/>
            </div>
            <div className="type-products_name">
                <h3>{typeProducts}</h3>
            </div>
            <div className="type-products_quantity">
                <span> sản phẩm</span>
            </div>
        </TypeProduct>
    </div>
  )
}

export default CardTypeProductComponent