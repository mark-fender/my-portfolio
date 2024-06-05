'use client';

import ActiveSectionContextProvider from '@/context/activeSectionContext';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => (
  <ActiveSectionContextProvider>
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
      {children}
    </ThemeProvider>
  </ActiveSectionContextProvider>
);

export default Providers;
