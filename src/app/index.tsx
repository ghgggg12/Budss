import React from 'react';
import { Header } from '../widgets/header/index.ts';
import { Hero } from '../widgets/hero/index.ts';
import { Footer } from '../widgets/footer/index.ts';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};
