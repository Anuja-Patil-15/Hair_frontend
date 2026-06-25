import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ShopByTexture from '../components/ShopByTexture';
import ShopByCollection from '../components/ShopByCollection';
import QuizCard from '../components/QuizCard';
import GotQuestions from '../components/GotQuestions';
import Footer from '../components/Footer';
import { api } from '../lib/api';

export default function Home() {
  const [textures, setTextures] = useState(undefined);
  const [collections, setCollections] = useState(undefined);

  useEffect(() => {
    api.getTextures().then(setTextures).catch(() => setTextures(null));
    api.getCollections().then(setCollections).catch(() => setCollections(null));
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <ShopByTexture items={textures || undefined} />
      <ShopByCollection items={collections || undefined} />
      <QuizCard />
      <GotQuestions />
      <Footer />
    </div>
  );
}
