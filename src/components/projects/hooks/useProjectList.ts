import useSectionInView from '@/hooks/useSectionInView';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

const useProjectList = () => {
  const { ref } = useSectionInView({ sectionName: 'Projects', threshold: 0.2 });
  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ['start end', 'end end'],
  });

  return { ref, projectsRef, scrollYProgress };
};

export default useProjectList;
