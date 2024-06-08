import useIsMobile from '@/hooks/useIsMobile';
import useSectionInView from '@/hooks/useSectionInView';
import { useState, useEffect } from 'react';

const useIntro = () => {
  const { isMobile } = useIsMobile();
  const { ref } = useSectionInView({ sectionName: 'Home', threshold: isMobile ? 0.25 : 0.75 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    isMobile,
    ref,
    mounted,
  };
};

export default useIntro;
