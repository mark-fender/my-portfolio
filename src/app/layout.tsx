import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marek Lipcak',
  description: 'Marek Lipcak',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${inter.className}  bg-slate-200 text-gray-950 relative pt-16 sm:pt-24`}>
        <div className='bg-[#d7dcfb] absolute top-[0] -z-10 right-[5rem] h-[31.25rem] w-[50em] rounded-full blur-[10rem] sm:w-[68.75rem]' />
        <div className='bg-[#d7f1fb] absolute top-[5rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]]' />
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
