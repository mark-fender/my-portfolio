'use client';

import { FaPaperPlane } from 'react-icons/fa';
import useSectionInView from '../hooks/useSectionInView';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const Contact = () => {
  const { ref } = useSectionInView({ sectionName: 'Contact' });

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{
        once: true,
      }}>
      <SectionHeading>Contact me</SectionHeading>
      <form className='mt-4 flex flex-col'>
        <input
          type='email'
          className='h-14 px-4 rounded-lg borderBlack'
          placeholder='Your e-mail.'
        />
        <textarea
          id='contact'
          className='h-52 p-4 my-3 rounded-lg borderBlack resize-none'
          placeholder='Your message.'
        />
        <div className='w-full flex justify-center mt-4'>
          <button
            type='submit'
            className='group flex items-center justify-center  gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full 
          outline-none transition-all hover:scale-110 hover:bg-gray-950 active:scale-105'>
            Submit{' '}
            <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
