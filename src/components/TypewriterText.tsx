import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 80 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [index, text, delay]);

  return (
    <span>
      {displayText}
      <span className="cursor-blink" style={{ marginLeft: '4px', display: 'inline-block', width: '4px', height: '0.9em', backgroundColor: 'var(--text-primary)', verticalAlign: 'baseline' }}></span>
    </span>
  );
};
