import React, { useEffect, useState } from 'react';
import '../styles/EmblaDots.css'

const EmblaDots = ({ embla, slides, updateAutoplayTiming }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      updateAutoplayTiming(); // Call the callback function to update autoplay timing
    };

    embla.on('select', onSelect);

    return () => {
      embla.off('select', onSelect);
    };
  }, [embla, updateAutoplayTiming]);

  if (!embla || !slides) return null;

  const dots = slides.map((_, index) => (
    <button
      key={index}
      onClick={() => embla.scrollTo(index)}
      className={index === selectedIndex ? 'is-selected dot' : 'dot'}
    />
  ));

  return <div className="embla-dots">{dots}</div>;
};

export default EmblaDots;
