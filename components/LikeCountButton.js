import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ color, children }) {
  const [like, setLike] = React.useState(0);

  const handleClick = () => {
    setLike(like + 1);
  };

  const handleReset = () => {
    setLike(0);
  };

  return (
    <>
      <div id="incrementCountContainer">
        <div id="childText">{children}</div>
        <button
          type="button"
          onClick={handleClick}
          style={{
            color,
            width: '45px',
            height: '30px',
          }}
          id="likeBtn"
        >
          Like
        </button>
        <button type="button" onClick={handleReset} id="resetBtn">
          Reset
        </button>
        <p id="likeCount" className={like > 0 ? 'likeCountAnimation' : ''}>
          {like}
        </p>
      </div>
    </>
  );
}

Counter.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Counter.defaultProps = {
  color: 'blue',
  children: 'Click Like Button to Increment or Reset to start over!',
};
