"use client";

import React from 'react';
import { ProductType } from '@/app/components/types/productType';

const CardHomeComponent = ({ name, desc, image, price }: ProductType) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg h-[500px]">
      <figure className="h-[90%] w-full overflow-hidden"> 
        <img
          src={image}
          alt={desc}
          className="w-full h-[400px]  object-cover rounded-t-lg" 
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h3>
        <p></p> 
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CardHomeComponent;
