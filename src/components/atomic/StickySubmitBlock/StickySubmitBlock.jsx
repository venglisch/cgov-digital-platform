import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './StickySubmitBlock.scss';

const StickySubmitBlock = ({ sentinelRef }) => {
  const stickyEl = useRef(null);

  useEffect(() => {
    intObserver.observe(stickyEl.current);
  }, []);

  const options = {
    root: sentinelRef,
    threshold: 1.0,
  };

  const callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio === 1) {
        entry.target.classList.remove('--sticky');
      } else {
        entry.target.classList.add('--sticky');
      }
    });
  };

  const intObserver = new IntersectionObserver(callback, options);

  return (
    <div ref={stickyEl} className="sticky-block__anchor">
      <div className="sticky-block">
        {/* <button type="submit" className="btn-submit">
          Find Trials
        </button> */}
        <Link to="/about-cancer/treatment/clinical-trials/search/r" className="faux-btn-submit">
          Find Trials
        </Link>
        <div className="helper-text">Start your search at any time.</div>
      </div>
    </div>
  );
};

StickySubmitBlock.propTypes = {
  sentinelRef: PropTypes.node,
};

StickySubmitBlock.defaultProps = {};

export default StickySubmitBlock;