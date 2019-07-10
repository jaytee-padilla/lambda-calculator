import React from "react";
import './Display.scss';

const Display = props => {
  return (
		<div className="display-container">
			<input className="display" type="text" value="" maxlength="14" disabled />
		</div>
	)
};

export default Display;
