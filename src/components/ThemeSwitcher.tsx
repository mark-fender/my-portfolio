'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs';

enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    resolvedTheme === ThemeModes.DARK ? setTheme(ThemeModes.LIGHT) : setTheme(ThemeModes.DARK);
  };

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'tween', duration: 0.25 }}
      className='fixed bottom-10 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl 
      rounded-full flex items-center justify-center hover:scale-[1.15] 
      active:scale-105 transition-all dark:bg-gray-950'
      onClick={switchTheme}>
      {resolvedTheme && resolvedTheme === ThemeModes.LIGHT ? (
        <BsLightbulbOff />
      ) : (
        <BsLightbulbFill />
      )}
    </motion.button>
  );
};

export default ThemeSwitcher;
