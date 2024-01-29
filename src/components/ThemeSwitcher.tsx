'use client';

import { useTheme } from 'next-themes';
import { BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs';

enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const switchTheme = () => {
    resolvedTheme === ThemeModes.DARK ? setTheme(ThemeModes.LIGHT) : setTheme(ThemeModes.DARK);
  };

  return (
    <button
      className='fixed bottom-10 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl 
      rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950'
      onClick={switchTheme}>
      {resolvedTheme === ThemeModes.LIGHT ? <BsLightbulbOff /> : <BsLightbulbFill />}
    </button>
  );
};

export default ThemeSwitcher;
