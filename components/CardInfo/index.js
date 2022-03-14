import React from 'react';
import Image from 'next/image';

const CardInfo = ({ data, desc, prize }) => {
  console.log(data.attributes.image.data.attributes.url, 'hii');
  return (
    <div className=" rounded-xl bg-slate-100 overflow-hidden w-min">
      <Image
        src={data.attributes.image.data.attributes.url}
        alt="product"
        layout="fixed"
        height={500}
        width={300}
      />
      <div className="p-2">
        <h2 className="text-black text-sm font-bold">
          {data.attributes.category}
        </h2>
        <h2 className="text-sm font-normal text-gray-500">{desc}</h2>
        <h2 className="text-black text-sm font-bold">{prize}</h2>
      </div>
    </div>
  );
};

export default CardInfo;
