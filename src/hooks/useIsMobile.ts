const useIsMobile = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  return { isMobile };
};

export default useIsMobile;
