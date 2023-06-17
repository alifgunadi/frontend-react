import React from 'react';

function Pagination(props) {
  return (
    <div className="next-prev">
      <button onClick={props.onPrev}>Prev</button>
      <button onClick={props.onNext}>Next</button>
    </div>
  );
}

export default Pagination;
