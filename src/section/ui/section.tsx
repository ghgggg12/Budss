import React from 'react';
import { Header } from '../../widgets/header/header.tsx';
import { Hero } from '../../widgets/hero/hero.tsx';
import { Footer } from '../../widgets/footer/footer.tsx';

export const Section: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};