'use client';

import { motion } from 'framer-motion';

const SectionDivider = () => (
  <motion.div
    className='bg-gray-300 my-24 h-1 sm:w-[35rem] w-52 rounded-full'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
  />
);

export default SectionDivider;
