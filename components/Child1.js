import React, { memo } from 'react';

const Child1 = () => {
  console.log('child 1 render');
  return (
    <div>
      <h1>Hello From Child 1</h1>
    </div>
  );
};

export default memo(Child1);
