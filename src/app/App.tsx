import React from 'react';
import { FormProvider } from '@features/Context/FormContext';
import { MenuProvider } from '@features/Context/MenuContext';
import { Header } from '@widgets/Header/index.ts';
import { Hero } from '@widgets/Hero/index.ts';
import { AboutSection } from '@widgets/About/index.ts';
import { HowWorks } from '@widgets/HowWorks/index.ts';
import { Stats } from '@widgets/Stats/index.ts';
import { WhyBudss } from '@widgets/WhyBudss/index.ts';
import { Brand } from '@widgets/Brand/index.ts';
import { Footer } from '@widgets/Footer/index.ts';
import { Form } from '@widgets/Form/index.ts';
import { BackgroundForm } from '@widgets/Form/codes/background/background.tsx';
import { Menu } from '@widgets/Menu/Menu.tsx';

export const App: React.FC = () => {
  return (
    <>
      <FormProvider>
        <MenuProvider>
          <Menu />
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
        </MenuProvider>
      </FormProvider>
    </>
  );
};