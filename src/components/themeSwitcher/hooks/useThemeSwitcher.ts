import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ThemeModes } from '../ThemeSwitcher';

const useThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeSwitchHandler = () => {
    resolvedTheme === ThemeModes.DARK ? setTheme(ThemeModes.LIGHT) : setTheme(ThemeModes.DARK);
  };

  return {
    mounted,
    resolvedTheme,
    themeSwitchHandler,
  };
};

export default useThemeSwitcher;
