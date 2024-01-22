import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import ActiveSectionContextProvider from '../context/activeSectionContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Toaster } from 'react-hot-toast';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marek Lipčák',
  description: "Marek Lipčák's personal web developer portfolio.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en' className='!scroll-smooth' suppressHydrationWarning>
      <body
        className={`${inter.className}  bg-slate-200 text-gray-950 relative pt-28 sm:pt-36 
      dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div
          className='bg-[#a6afec] absolute top-[0] -z-10 right-[15rem] h-[31.25rem] w-[50em] rounded-full blur-[15rem] 
          sm:w-[68.75rem] xl:right-[-5rem] 2xl:right-[15rem] dark:bg-[#5b639e]'
        />
        <div
          className='bg-[#9fddf4] absolute top-[10rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] 
          sm:w-[90rem] md:left-[-55rem] lg:left-[-30rem] xl:left-[-25rem] 2xl:left-0 dark:bg-[#70a3b6]'
        />

        <div
          className='bg-[#cff1fd] absolute bottom-[0rem] -z-10 right-[5rem] xl:right-[15rem] h-[15rem] w-[25em] rounded-full blur-[15rem] 
          sm:w-[68.75rem] dark:bg-[#70a3b6]'
        />
        <div
          className='bg-[#cdd3f8] absolute bottom-[5rem] -z-10 left-[-5rem] h-[15rem] w-[25rem] rounded-full blur-[15rem] 
          sm:w-[90rem] md:left-[-35rem] lg:left-[-30rem] xl:left-[15rem] dark:bg-[#5b639e]'
        />
        <Providers>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right' />
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
