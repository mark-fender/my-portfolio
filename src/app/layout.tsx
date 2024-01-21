import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import ActiveSectionContextProvider from '../context/activeSectionContext';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marek Lipčák',
  description: "Marek Lipčák's personal web developer portfolio.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${inter.className}  bg-slate-200 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className='bg-[#cdd3f8] absolute top-[0] -z-10 right-[5rem] h-[31.25rem] w-[50em] rounded-full blur-[10rem] sm:w-[68.75rem]' />
        <div className='bg-[#cff1fd] absolute top-[10rem] -z-10 left-[-55rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[90rem] md:left-[-35rem] lg:left-[-30rem] xl:left-[-15rem] 2xl:left-[-5rem]]' />

        <div className='bg-[#cff1fd] absolute bottom-[-6rem] -z-10 right-[5rem] h-[15rem] w-[25em] rounded-full blur-[10rem] sm:w-[68.75rem]' />
        <div className='bg-[#cdd3f8] absolute bottom-[-10rem] -z-10 left-[-55rem] h-[15rem] w-[25rem] rounded-full blur-[10rem] sm:w-[90rem] md:left-[-35rem] lg:left-[-30rem] xl:left-[-15rem] 2xl:left-[-5rem]]' />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
