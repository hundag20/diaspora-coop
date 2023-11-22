import React from 'react';
import '../styles/EmblaDots.css'

const EmblaDots = ({ embla, slides }) => {
  if (!embla || !slides) return null;

  const dots = slides.map((_, index) => (
    <button
      key={index}
      onClick={() => embla.scrollTo(index)}
      className={index === embla.selectedScrollSnap() ? 'is-selected dot' : 'dot'}
    />
  ));

  return <div className="embla-dots">{dots}</div>;
};

export default EmblaDots;
