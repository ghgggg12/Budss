import React from 'react';
import { FormProvider } from '../features/Context/Context.tsx';
import { Header } from '../widgets/Header/index.ts';
import { Hero } from '../widgets/Hero/index.ts';
import { AboutSection } from '../widgets/About/index.ts';
import { HowWorks } from '../widgets/HowWorks/index.ts';
import { Stats } from '../widgets/Stats/index.ts';
import { WhyBudss } from '../widgets/WhyBudss/index.ts';
import { Brand } from '../widgets/Brand/index.ts';
import { Footer } from '../widgets/Footer/index.ts';
import { Form } from '../widgets/Form/index.ts';
import { BackgroundForm } from '../widgets/Form/codes/background/background.tsx';

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