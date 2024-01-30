'use client';

import SectionHeading from '@/components/SectionHeading';
import Project from '@/components/Project';
import { projectsData } from '@/lib/data';
import useSectionInView from '@/hooks/useSectionInView';
import useIsMobile from '@/hooks/useIsMobile';

const Projects = () => {
  const { isMobile } = useIsMobile(); 
  const { ref } = useSectionInView({ sectionName: 'Projects', threshold: isMobile ? 0.2 : 0.5 });

  return (
    <section ref={ref} id='projects' className='scroll-mt-36'>
      <SectionHeading>My Projects</SectionHeading>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
    </section>
  );
};

export default Projects;
