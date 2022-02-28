import classNames from 'classnames';
import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

const Carousal = ({ data }) => {
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousalRef = useRef();
  const intervalRef = useRef();

  const autoIncrement = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((val) => (data.length > val + 1 ? val + 1 : 0));
    }, 5000);
  }, [data.length]);

  const stopCarousal = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  // component Did mount
  useEffect(() => {
    autoIncrement();
    return () => {
      stopCarousal();
    };
  }, [autoIncrement, stopCarousal]);

  useLayoutEffect(() => {
    setDeviceWidth(carousalRef.current.clientWidth);
  }, []);

  const handlePrev = () => {
    stopCarousal();
    setCurrentIndex((val) => (val > 0 ? val - 1 : data.length - 1));
    autoIncrement();
  };

  const handleNext = () => {
    stopCarousal();
    setCurrentIndex((val) => (data.length > val + 1 ? val + 1 : 0));
    autoIncrement();
  };

  return (
    <div
      ref={carousalRef}
      className="relative w-screen h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div className="flex absolute w-full h-full justify-between z-50 px-4">
        <button className="top-0 left-0" onClick={handlePrev}>
          Previous
        </button>
        <button className="top-0 right-0" onClick={handleNext}>
          next
        </button>
      </div>
      {data.map((x, index) => {
        return (
          <div
            key={x.id}
            className={classNames(
              'absolute h-full w-full top-0 left-0 overflow-x-auto transition duration-500',
              {
                'ease-in opacity-100': index === currentIndex,
                'ease-out opacity-0': index !== currentIndex,
              }
            )}
          >
            <div className="relative h-full w-full">
              <Image
                src={x.attributes.bannerImage.data.attributes.url}
                alt="banner"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousal;
