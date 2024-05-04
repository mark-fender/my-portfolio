'use client';

import Image from 'next/image';
import photo from '/public/assets/photo.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import useSectionInView from '@/hooks/useSectionInView';
import useIsMobile from '@/hooks/useIsMobile';

const Intro = () => {
  const { isMobile } = useIsMobile();
  const { ref } = useSectionInView({ sectionName: 'Home', threshold: isMobile ? 0.25 : 0.75 });
  // const { setLastClickTime } = useActiveSection();

  return (
    <section ref={ref} className='mt-8 max-w-[75rem] text-center sm:mb-0 scroll-mt-36' id='home'>
      <div className='flex items-center justify-center pt-2'>
        <motion.div
          className='mb-8'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.5 }}>
          <Image
            src={photo}
            alt='marek-lipcak-portrait'
            width={256}
            height={256}
            quality='95'
            priority={true}
            className='rounded-full border-[0.15rem] border-gray-200 shadow-xl'
          />
        </motion.div>
      </div>
      <motion.h1
        className='mb-10 mt-16 px-4 text-xl font- !leading-[1.5] sm:text-2xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className='font-bold'>Hi, my name is Marek.</span> I am an experienced{' '}
        <span className='font-bold'>frontend developer</span> with{' '}
        <span className='font-bold'>6 years</span> of professional experience in web development. I
        am passionate about building responsive user interfaces with performance and attention to
        detail in mind. My main focus is on <span className='font-bold'>ReactJS</span>.
      </motion.h1>
      <motion.div
        className='mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 tex-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.35 }}>
        <Link
          href='#contact'
          className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-105 hover:scale-105 hover:bg-gray-950 dark:bg-gray-950 active:scale-102 transition group'>
          Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        {/* <a
          href='/CV.pdf'
          onClick={() => setLastClickTime(Date.now())}
          download
          className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-105 hover:scale-105 active:scale-102 transition group cursor-pointer borderBlack dark:bg-white/10'>
          Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
        </a> */}
        <div className='flex flex-row gap-2'>
          <a
            href='https://linkedin.com/in/marek-lipčák'
            target='_blank'
            className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full dark:text-white/60 dark:bg-white/10
            focus:scale-105 hover:text-gray-950 hover:scale-105 active:scale-102 transition group cursor-pointer borderBlack'>
            <BsLinkedin />
          </a>
          <a
            href='https://github.com/mark-fender'
            target='_blank'
            className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full dark:text-white/60 dark:bg-white/10
            focus:scale-105 hover:text-gray-950 hover:scale-105 active:scale-102 transition group cursor-pointer borderBlack'>
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
