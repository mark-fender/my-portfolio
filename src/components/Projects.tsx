'use client';

import SectionHeading from './SectionHeading';
import Project from './Project';
import { projectsData } from '../lib/data';
import useSectionInView from '../hooks/useSectionInView';

const Projects = () => {
  const { ref } = useSectionInView({ sectionName: 'Projects', threshold: 0.5 });

  return (
    <section ref={ref} id='projects' className='scroll-mt-36'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
