import React from "react";
import '../button.scss';

const NumberButton = props => {
  return (
    <>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="btn" id={`btn-${props.numData}`}>{props.numData}</button>
    </>
  );
};

export default NumberButton;
