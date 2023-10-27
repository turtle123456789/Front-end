import React from 'react'
import { TypeProduct } from './style'

const CardTypeProductComponent = ({typeProduct}) => {
  return (
    <div>
        <TypeProduct>
            <div className="type-products_img">
                <img src={typeProduct.image} alt=""/>
            </div>
            <div className="type-products_name">
                <h3>{typeProduct.name}</h3>
            </div>
            <div className="type-products_quantity">
                <span>{typeProduct.quantity} sản phẩm</span>
            </div>
        </TypeProduct>
    </div>
  )
}

export default CardTypeProductComponent