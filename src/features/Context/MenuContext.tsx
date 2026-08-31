import React, { createContext, useState, type ReactNode } from 'react';

interface MenuContextType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
    const context = React.useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within MenuProvider');
    }
    return context;
};