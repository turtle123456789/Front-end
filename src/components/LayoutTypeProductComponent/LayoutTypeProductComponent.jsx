import React from 'react';
// Import the CardTypeProductComponent if it's in the same directory
import { ListTypeProduct } from './style';
import CardTypeProductComponent from '../CardTypeProductComponent/CardTypeProductComponent';

const LayoutTypeProductComponent = ({ TypeProductData }) => {
  return (
    <div>
      <ListTypeProduct>
        {TypeProductData.map((typeProduct) => (
          <CardTypeProductComponent key={typeProduct.id} typeProduct={typeProduct}/>
        ))}
      </ListTypeProduct>
    </div>
  );
};

export default LayoutTypeProductComponent;
