import { useContext } from 'react';
import { ActiveSectionContext } from '../context/activeSectionContext';

const useActiveSection = () => {
  const activeSectionValue = useContext(ActiveSectionContext);

  if (activeSectionValue === null) {
    throw new Error('useActiveSection must be used within active section context');
  }

  return activeSectionValue;
};

export default useActiveSection;
