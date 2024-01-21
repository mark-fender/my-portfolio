import { useEffect } from 'react';
import useActiveSection from './useActiveSection';
import { useInView } from 'react-intersection-observer';
import { SectionName } from '../types';

type UseSectionInViewProps = {
  sectionName: SectionName;
  threshold?: number;
};

const useSectionInView = ({ sectionName, threshold = 0.75 }: UseSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClickTime } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, lastClickTime, sectionName, setActiveSection]);

  return { ref };
};

export default useSectionInView;
