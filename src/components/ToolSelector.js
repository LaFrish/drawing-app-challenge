import React, { PropTypes } from "react";
import { BRUSH, STAMP, ERASER } from "../constants/Tools";

export default function ToolSelector(props) {
	const { action, tool } = props;
	return (
		<div className="tool-container">
			<div className="radio">
				<input type="button" name="tool" id="brush-select"
					value={BRUSH}
					checked={tool === BRUSH}
					onChange={ (e) => { action(e.target.value) } } />
			</div>

			<div className="radio">
				<input type="button" name="tool" id="stamp-select"
					value={STAMP}
					checked={tool === STAMP}
					onChange={ (e) => { action(e.target.value) } } />

			</div>

			<div className="radio">
				<input type="button" name="tool" id="eraser-select"
					value={ERASER}
					checked={tool === ERASER}
					onChange={ (e) => { action(e.target.value) } } />
			</div>
		</div>
	);
}
ToolSelector.propTypes = {
	tool: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
