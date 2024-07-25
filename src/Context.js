import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isShaking, setIsShaking] = useState(false);

  const startShaking = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 1000); // Stop shaking after 1 second
  };

  return (
    <ScrollContext.Provider value={{ isShaking, startShaking }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);