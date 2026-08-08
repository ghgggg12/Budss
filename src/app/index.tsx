import React from 'react';
import { Header } from '../widgets/Header/index.ts';
import { Hero } from '../widgets/Hero/index.ts';
import { AboutSection } from '../widgets/Hero/About/About.tsx';
import { HowWorks } from '../widgets/Hero/HowWorks/HowWorks.tsx';
import { Stats } from '../widgets/Hero/Stats/Stats.tsx';
import { WhyBudss } from '../widgets/Hero/WhyBudss/WhyBudss.tsx';
import { Brand } from '../widgets/Hero/Brand/Brand.tsx';
/*import { Footer } from '../widgets/Footer/index.ts';*/

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
    </>
  );
};