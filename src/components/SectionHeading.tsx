import { ReactNode } from 'react';

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <h2 className='text-3xl font-medium capitalize mb-16 text-center'>{children}</h2>
);

export default SectionHeading;
