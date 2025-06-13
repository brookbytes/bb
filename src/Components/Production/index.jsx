import React, { useEffect, useState } from 'react';
import "./Production.css";
import { productions } from '../../sources';
import ProductionCard from './ProductionCard';
import ProductionNavigation from './ProductionNavigation';

const Production = () => {
  const [activeProductions, setActiveProductions] = useState(productions);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 600);
  }, [activeProductions]);

  const getTabs = () => {
    const tabs = ["All"];
    productions.forEach((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
    return tabs;
  };

  const setProductions = (value) => {
    if (value === "All") {
      return setActiveProductions(productions);
    }
    const newProductions = productions.filter((item) => item.category === value);
    setActiveProductions(newProductions);
  };

  return (
    <section id="production" data-aos="fade-right">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">Our Productions</span>
          </h1>
        </div>
        <ProductionNavigation tabs={getTabs()} onChange={setProductions} />
        <div className="production-container">
          {activeProductions.map((production, index) => (
            <ProductionCard
              {...production}
              className={load ? 'zoom' : ''}
              key={index}
              production={production}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Production;
