'use client';

import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import useSectionInView from '../hooks/useSectionInView';
import { experiencesData } from '../lib/data';
import PositionDetail from './PositionDetail';
import { motion, useScroll } from 'framer-motion';

const Experience = () => {
  const { ref: sectionRef } = useSectionInView({ sectionName: 'Experience' });
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end'] });

  return (
    <section ref={sectionRef} id='experience'>
      <SectionHeading>My Experience</SectionHeading>
      <div ref={ref} className='relative w-[75%] mx-auto'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-2 top-0 w-1 h-full bg-gray-600 rounded-full'
        />
        <ul className='ml-16'>
          {experiencesData.map((position, index) => (
            <PositionDetail key={index} {...position} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
