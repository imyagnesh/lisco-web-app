import React from 'react';

const AsideList = ({ title, list }) => {
  return (
    <div className="p-3">
      <h2>{title}</h2>
      {list.map((x, i) => {
        return (
          <div key={i} className="flex items-center ">
            <input type="checkbox" className="mr-2" />
            <p>{x.attributes.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AsideList;
