import React, { useLayoutEffect, useRef, useState } from 'react';

const Carousal = () => {
  const [items, setItems] = useState([
    { id: 1, color: 'red' },
    { id: 2, color: 'green' },
    { id: 3, color: 'blue' },
  ]);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousalRef = useRef();

  useLayoutEffect(() => {
    setDeviceWidth(carousalRef.current.clientWidth);
  }, []);

  return (
    <div ref={carousalRef} className="relative w-screen h-screen">
      <div className="flex absolute w-full h-full justify-between z-50 px-4">
        <button
          className="top-0 left-0"
          onClick={() =>
            setCurrentIndex((val) => (val > 0 ? val - 1 : items.length - 1))
          }
        >
          Previous
        </button>
        <button
          className="top-0 right-0"
          onClick={() =>
            setCurrentIndex((val) => (items.length > val + 1 ? val + 1 : 0))
          }
        >
          next
        </button>
      </div>
      {items.map((x, index) => {
        return (
          <div
            key={x.id}
            className="absolute h-full w-full top-0 overflow-x-auto"
            style={{
              left: (index - currentIndex) * deviceWidth,
              backgroundColor: x.color,
            }}
          >
            <h1>hello</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Carousal;
