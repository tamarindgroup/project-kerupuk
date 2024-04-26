import './App.css';
import { Home } from './Page/Home';
import { About } from './Page/About';
import Artikel from './Page/Artikel';
import Header from './Page/Header';
import { BrandProvider } from './BrandContext';
import { Product } from './Page/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <BrandProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/artikel' element={<Artikel />} />
        <Route path='/produk' element={<Product />} />
      </Routes>
    </BrandProvider>
  </BrowserRouter>
  );
}

export default App;
