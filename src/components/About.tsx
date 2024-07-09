'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import useSectionInView from '@/hooks/useSectionInView';
import useIsMobile from '@/hooks/useIsMobile';

const About = () => {
  const { isMobile } = useIsMobile();
  const { sectionRef } = useSectionInView({ sectionName: 'About', threshold: isMobile ? 0.2 : 0.8 });

  return (
    <motion.section
      ref={sectionRef}
      className='max-w-[45rem] text-center leading-8 scroll-mt-36'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      id='about'>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I graduated with a <span className='font-medium'>master&apos;s degree</span> in
        <span className='font-medium'> computer science</span> from
        <span className='font-medium'> Technical University of Košice</span> in 2020. I embarked on
        my journey in the tech world back in 2017 as a part-time Software Engineer, diving into
        application testing and some Java coding. The transition to full-time
        <span className='font-medium'> frontend development</span> was a game changer, and I
        instantly fell in love with it. What excites me most about frontend development is the
        perfect blend of logical problem solving and unleashing creativity for stunning designs. I
        thrive on creating software that not only works seamlessly but also looks and feels
        fantastic. My go-to stack includes
        <span className='font-medium'> ReactJS, NextJS, Angular, & TypeScript</span>. Always eager
        to learn, I stay updated with the latest technologies to bring innovative solutions to the
        table.
      </p>

      <p>
        <span className='italic'>When I&apos;m not coding</span>, you can find me immersed in a
        world of video games, breaking a sweat at the gym, strumming my guitar, expanding my tech
        knowledge, getting lost in books, or brewing the perfect cup of coffee. Let&apos;s connect
        and explore the endless possibilities of tech and beyond!
      </p>
    </motion.section>
  );
};

export default About;
