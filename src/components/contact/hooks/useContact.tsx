import { sendEmail } from '@/actions/sendEmail';
import useSectionInView from '@/hooks/useSectionInView';
import toast, { Toast } from 'react-hot-toast';
import CustomToast from '@/components/CustomToast';
import { MdCheck, MdClose } from 'react-icons/md';

const useContact = () => {
  const { sectionRef } = useSectionInView({ sectionName: 'Contact' });

  const handleFormSubmitAction = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      popToast(error, <MdClose />);
    }
    if (data) {
      popToast('E-mail sent successfully!', <MdCheck />);
    }
  };

  const popToast = (message: string, icon: JSX.Element) => {
    toast.custom((toast: Toast) => <CustomToast toast={toast} message={message} icon={icon} />);
  };

  return {
    sectionRef,
    handleFormSubmitAction,
  };
};

export default useContact;
