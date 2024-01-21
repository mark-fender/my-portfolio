'use client';

import useSectionInView from '../hooks/useSectionInView';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { sendEmail } from '../actions/sendEmail';
import SubmitButton from './SubmitButton';
import toast from 'react-hot-toast';

const Contact = () => {
  const { ref } = useSectionInView({ sectionName: 'Contact' });

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-8 w-[min(100%,38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}>
      <SectionHeading>Contact me</SectionHeading>
      <form
        className='mt-4 flex flex-col'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          }
          if (data) {
            toast.success('E-mail sent successfully!');
          }
        }}>
        <span className='w-full text-center mb-4'>Let&apos;s talk about possible collaboration.</span>
        <input
          required
          maxLength={150}
          type='email'
          name='senderEmail'
          className='h-14 px-4 rounded-lg borderBlack'
          placeholder='Your e-mail'
        />
        <textarea
          id='contact'
          maxLength={750}
          required
          name='message'
          className='h-52 p-4 my-3 rounded-lg borderBlack resize-none'
          placeholder='Your message'
        />
        <div className='w-full flex justify-center mt-4'>
          <SubmitButton />
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
