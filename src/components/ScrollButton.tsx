import { useEffect, useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from '../theme';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 50 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.addEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div>
        {visible ? (
          <button
            className="btn btn-primary btn-square fixed justify-end align-bottom"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{ color: theme.Secondary }}
              size="xl"
            />
          </button>
        ) : null}
      </div>
    </>
  );
};

export default ScrollButton;
