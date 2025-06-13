import React, { useEffect, useRef, useState } from 'react';
import "./ProductionNavigation.css";
import Aos from 'aos';

const ProductionNavigation = ({ tabs, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  const sumArray = (arr) => arr.reduce((acc, val) => acc + (val?.offsetWidth || 0), 0);

  useEffect(() => {
    Aos.refreshHard();
    if (!itemsEls.current[activeIndex]) return;

    const prevEl = itemsEls.current.slice(0, activeIndex);
    setOffset(sumArray(prevEl));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  return (
    <nav className="production-navigation">
      {tabs.map((tab, index) => (
        <button
          ref={(el) => (itemsEls.current[index] = el)}
          onClick={() => {
            setActiveIndex(index);
            onChange(tab);
            Aos.refreshHard();
          }}
          key={index}
          className={index === activeIndex ? 'active' : ''}
        >
          {tab}
        </button>
      ))}
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
