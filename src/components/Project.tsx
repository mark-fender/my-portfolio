'use client';

import { projectsData } from '@/lib/data';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const Project = ({
  index,
  progress,
  range,
  targetScale,
  title,
  description,
  tags,
}: ProjectProps) => {
  const projectRef = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div ref={projectRef} style={{ scale }} className='sticky top-24 sm:top-40'>
      <section
        style={{ top: `${index * 25}px` }}
        className='relative flex flex-col justify-between bg-slate-300 max-w-[60rem] transition h-[45rem] sm:max-h-[25rem] mb-16 borderBlack p-8 rounded-lg shadow-lg shadow-black/[0.10] dark:bg-slate-600 dark:border dark:border-black/25'>
        <div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-8 leading-relaxed'>{description}</p>
        </div>
        <ul className='hidden sm:flex flex-wrap mt-8 mb-2 gap-2 '>
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
