import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Product from './pages/Product';
import QuizCard from './components/QuizCard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products/illusion-lace-wig" element={<Product />} />
        <Route path="/StyleQuiz" element={<QuizCard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
