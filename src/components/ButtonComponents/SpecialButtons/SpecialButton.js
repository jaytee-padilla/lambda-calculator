import React from "react";
import '../button.scss';

const SpecialButton = props => {
  return (
    <>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="btn" id={props.special.id}>{props.special.char}</button>
    </>
  );
};

export default SpecialButton;
