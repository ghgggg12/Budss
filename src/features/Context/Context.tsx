import React, { createContext, useState, type ReactNode } from 'react';

interface FormContextType {
    display: boolean;
    setDisplay: (value: boolean) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <FormContext.Provider value={{ display, setDisplay }}>
      {children};
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
    const context = React.useContext(FormContext);
    if (!context) {
        throw new Error('Error');
    }
    return context;
};