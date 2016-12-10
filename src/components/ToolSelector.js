import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { BRUSH, STAMP, ERASER } from "../constants/Tools";
import { bindActionCreators } from "redux";
import { selectTool } from '../actions/index';
import { onToolSelect } from '../actions/index';

// export default
function ToolSelector(props) {
	const { action, tool } = props;
	return (
		<div>
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

			const mapStateToProps = state => ({
				tools: state.tools
			})

			function mapDispatchToProps(dispatch) {
				return bindActionCreators({ selectTool, onToolSelect }, dispatch);
			}

			export default connect(mapStateToProps, mapDispatchToProps)(ToolSelector);
