import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Product from './pages/Product';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products/illusion-lace-wig" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
