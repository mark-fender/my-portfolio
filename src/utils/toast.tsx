import clsx from 'clsx';
import { ReactNode } from 'react';
import toast from 'react-hot-toast';

export const popToast = (message: string, icon: ReactNode) => {
  toast.custom((t) => (
    <div
      className={clsx(
        'max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex text-gray-900 dark:bg-gray-900 dark:text-gray-50',
        {
          'animate-enter': t.visible,
          'animate-leave': !t.visible,
        },
      )}>
      <div className='flex-1 w-0 p-4'>
        <div className='flex items-start'>
          {icon}
          <div className='ml-3 flex-1'>
            <p className='text-sm font-medium'>{message}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};
