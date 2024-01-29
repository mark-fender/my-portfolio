import { useContext } from 'react';
import { ActiveSectionContext } from '../context/activeSectionContext';

const useActiveSection = () => {
  const activeSection = useContext(ActiveSectionContext);

  if (activeSection === null) {
    throw new Error('useActiveSection must be used within active section context');
  }

  return activeSection;
};

export default useActiveSection;
