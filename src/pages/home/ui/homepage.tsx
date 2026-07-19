import React from 'react';
import { Header } from '../../../widgets/header/ui/header.tsx';
import { Hero } from '../../../widgets/hero/ui/hero.tsx';
import { Footer } from '../../../widgets/footer/ui/footer.tsx';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};