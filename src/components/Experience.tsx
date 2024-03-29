'use client';

import React, { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import useSectionInView from '@/hooks/useSectionInView';
import { experiencesData } from '@/lib/data';
import PositionDetail from '@/components/PositionDetail';
import { motion, useScroll } from 'framer-motion';
import useIsMobile from '@/hooks/useIsMobile';

const Experience = () => {
  const { isMobile } = useIsMobile();
  const { ref: sectionRef } = useSectionInView({
    sectionName: 'Experience',
    threshold: isMobile ? 0.3 : 0.9,
  });
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1.33 1'] });

  return (
    <section ref={sectionRef} id='experience'>
      <SectionHeading>My Experience</SectionHeading>
      <div ref={ref} className='relative w-[75%] mx-auto'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-2 top-0 w-1 h-full bg-slate-500 rounded-full hidden sm:block'
        />
        <ul className='sm:ml-16 overflow-hidden'>
          {experiencesData.map((position, index) => (
            <PositionDetail key={index} {...position} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
