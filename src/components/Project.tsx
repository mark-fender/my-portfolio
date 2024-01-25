'use client';

import { projectsData } from '../lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags }: ProjectProps) => {
  const projectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className='mb-3 sm:mb-8 last:mb-0'
      ref={projectRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}>
      <section
        className='flex flex-col justify-between bg-slate-300 max-w-[50rem] hover:scale-105 transition
      sm:h-[25rem] max-h-fit mb-8 borderBlack p-8 rounded-lg shadow-lg shadow-black/[0.10] dark:bg-opacity-10'>
        <div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-8 leading-relaxed'>{description}</p>
        </div>
        <ul className='flex flex-wrap mt-8 mb-2 gap-2'>
          {tags.map((tag, index) => (
            <li
              key={index}
              className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default Project;
