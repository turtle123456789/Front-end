import React, { useState } from "react";
import CardProductComponent from "../CardProductComponent/CardProductComponent";

const LayoutProductComponent = (props) => {
  return (
    <div>
      <div >
        <div className="list-product">
            <CardProductComponent {...props}/>
        </div>
      </div>
    </div>
  );
};

export default LayoutProductComponent;
