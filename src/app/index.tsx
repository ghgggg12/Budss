import React from 'react';
import { Header } from '../widgets/Header/index.ts';
import { Hero } from '../widgets/Hero/index.ts';
import { AboutSection } from '../widgets/Hero/About/About.tsx';
import { Footer } from '../widgets/Footer/index.ts';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <Footer />
    </>
  );
};