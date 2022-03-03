import Image from 'next/image';
import React from 'react';

const ProductImage = ({ title, ...rest }) => {
  return (
    <div className="relative h-[230px] w-[180px] rounded-md ">
      <Image layout="fill" objectFit="cover" className="rounded-md" {...rest} />
      <div className="absolute bottom-0 left-0 z-10 w-full backdrop-blur-xl rounded-b-md py-2">
        <h3 className="font-bold text-xl text-center truncate">{title}</h3>
      </div>
    </div>
  );
};

export default ProductImage;
