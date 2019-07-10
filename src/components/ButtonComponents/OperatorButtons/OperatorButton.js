import React from "react";
import '../button.scss';

const OperatorButton = props => {
  return (
    <>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="btn" id={props.operator.id}>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton;
