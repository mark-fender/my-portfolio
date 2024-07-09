import { useEffect } from 'react';
import useActiveSection from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';
import { SectionName } from '@/types';

type UseSectionInViewProps = {
  sectionName: SectionName;
  threshold?: number;
};

const useSectionInView = ({ sectionName, threshold = 0.75 }: UseSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClickTime } = useActiveSection();

  useEffect(() => {
    const isRecentClick = Date.now() - lastClickTime > 1000;
    if (inView && isRecentClick) {
      setActiveSection(sectionName);
    }
  }, [inView, lastClickTime, sectionName, setActiveSection]);

  return { sectionRef: ref };
};

export default useSectionInView;
