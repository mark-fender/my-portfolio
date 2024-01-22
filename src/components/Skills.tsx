'use client';

import { motion } from 'framer-motion';
import useSectionInView from '../hooks/useSectionInView';
import { skillsData } from '../lib/data';
import SectionHeading from './SectionHeading';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView({ sectionName: 'Skills' });

  return (
    <section ref={ref} className='max-w-[53rem] scroll-mt-36 text-center' id='skills'>
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-gray-50'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-slate-300 borderBlack rounded-xl px-5 py-3 shadow-md shadow-black/[0.10] dark:bg-opacity-5'
            variants={fadeInAnimationVariants}
            initial={'initial'}
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
