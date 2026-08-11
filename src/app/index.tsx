import React from 'react';
import { Header } from '../widgets/Header/index.ts';
import { Hero } from '../widgets/Hero/index.ts';
import { AboutSection } from '../widgets/Hero/About/index.ts';
import { HowWorks } from '../widgets/Hero/HowWorks/index.ts';
import { Stats } from '../widgets/Hero/Stats/index.ts';
import { WhyBudss } from '../widgets/Hero/WhyBudss/index.ts';
import { Brand } from '../widgets/Hero/Brand/index.ts';
import { Footer } from '../widgets/Footer/index.ts';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <HowWorks />
      <Stats />
      <WhyBudss />
      <Brand />
      <Footer />
    </>
  );
};