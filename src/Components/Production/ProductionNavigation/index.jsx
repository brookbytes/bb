import React, { useEffect, useRef, useState } from 'react';
import "./ProductionNavigation.css";
import Aos from 'aos';

const ProductionNavigation = ({
  tabs,
  onChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };

  useEffect(() => {
    Aos.refreshHard();
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(
      sumArray(prevEl.map(item => item.offsetWidth))
    );
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  return (
    <nav className='production-navigation'>
      {
        tabs.map((tab, index) => (
          <button
            ref={el => itemsEls.current[index] = el}
            onClick={() => {
              setActiveIndex(index);
              onChange(tab);
              Aos.refreshHard();
            }}
            key={index}
          >
            {tab}
          </button>
        ))
      }
      <span
        className="indicator"
        style={{
          left: `${offset}px`,
          width: `${indicatorWidth}px`,
        }}
      />
    </nav>
  );
};

export default ProductionNavigation;
