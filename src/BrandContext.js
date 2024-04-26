import React, { createContext, useContext, useState } from 'react';
import dataProduk from './data/produk';

const BrandContext = createContext();

export const useBrandContext = () => useContext(BrandContext);

export const BrandProvider = ({ children }) => {
  // Ambil merek yang unik dari data produk
  const uniqueBrands = Array.from(new Set(dataProduk.map(item => item.brand)));

  // Gunakan merek pertama sebagai merek yang dipilih secara default
  const [selectedBrand, setSelectedBrand] = useState(uniqueBrands[0]);

  return (
    <BrandContext.Provider value={{ selectedBrand, setSelectedBrand }}>
      {children}
    </BrandContext.Provider>
  );
};