import { experiencesData } from '../lib/data';

type PositionDetailProps = (typeof experiencesData)[number];

const PositionDetail = ({ title, company, description, date }: PositionDetailProps) => {
  return (
    <li className='mb-16 last:mb-0 w-full mx-auto flex flex-col items-left justify-between'>
      <h3 className='font-bold text-size-3xl'>
        {title} at {company}
      </h3>
      <span className='font-medium my-2 text-gray-950/55'>{date}</span>
      <p className='w-full'> {description}</p>
    </li>
  );
};

export default PositionDetail;
