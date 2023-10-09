import React from 'react'
import '../../index.css'
const CardBrandComponent = ({brand}) => {
  return (
    <div style={{textAlign: 'center'}}>
        <img src={brand.image} alt=""  style={{maxWidth: '182px', borderRadius: '10px'}}/>
        <h3>{brand.name}</h3>
    </div>
  )
}

export default CardBrandComponent