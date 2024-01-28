'use client';

import SectionHeading from './SectionHeading';
import Project from './Project';
import { projectsData } from '../lib/data';
import useSectionInView from '../hooks/useSectionInView';

const Projects = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
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
