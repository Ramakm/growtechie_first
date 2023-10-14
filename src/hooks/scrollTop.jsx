import { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return <></>;
};

export default ScrollTop;
