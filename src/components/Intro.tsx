'use client';

import Image from 'next/image';
import photo from '../../public/assets/photo.jpeg';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.75 }}>
          <Image
            src={photo}
            alt={'marek-lipcak-portrait'}
            width={256}
            height={256}
            quality='95'
            priority={true}
            className='rounded-full border-[0.25rem] border-white shadow-xl'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
