import React from 'react';
import { FormProvider } from '../widgets/Hero/Form/codes/open/Context.tsx';
import { Header } from '../widgets/Header/index.ts';
import { Hero } from '../widgets/Hero/index.ts';
import { AboutSection } from '../widgets/Hero/About/index.ts';
import { HowWorks } from '../widgets/Hero/HowWorks/index.ts';
import { Stats } from '../widgets/Hero/Stats/index.ts';
import { WhyBudss } from '../widgets/Hero/WhyBudss/index.ts';
import { Brand } from '../widgets/Hero/Brand/index.ts';
import { Footer } from '../widgets/Footer/index.ts';
import { Form } from '../widgets/Hero/Form/index.ts';
import { BackgroundForm } from '../widgets/Hero/Form/codes/background/background.tsx';

export const App: React.FC = () => {
  return (
    <>
      <FormProvider>
        <Header />
        <Form />
        <Hero />
        <AboutSection />
        <HowWorks />
        <Stats />
        <WhyBudss />
        <Brand />
        <Footer />
        <BackgroundForm />
      </FormProvider>
    </>
  );
};