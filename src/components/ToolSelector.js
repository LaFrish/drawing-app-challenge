import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { BRUSH, STAMP, ERASER } from "../constants/Tools";
import { bindActionCreators } from "redux";
import { selectTool } from '../actions/index';
import { onToolSelect } from '../actions/index';

var tools = [
	{
		id:1,
		name: "BRUSH",
		title: "BRUSH",
		value: "BRUSH",
		index: "1"
	},
	{
		id:2,
		name: "STAMP",
		title: "STAMP",
		value: "STAMP",
		index: "2"
	},
	{
		id:3,
		name: "ERASER",
		title: "ERASER",
		value: "ERASER",
		index: "3"
	}
];

class ToolSelector extends React.Component {
	constructor(props) {
		super(props);
		this.onSelect = this.onSelect.bind(this);
		this.state = {
			selectedTool: BRUSH, STAMP, ERASER
		};
	}
	onSelect(index) {
		this.setState({
			selectedTool: index
		});
	}
	render() {
		return <div>
			<div
				className="status">
				Selected Tool: { this.state.selectedTool }
			</div>
			<Toggle
				tools={ tools }
				selectedTool={this.state.selectedTool}
				onSelect={this.onSelect} />
		</div>;
	}
}

class ToggleTool extends React.Component {
	onSelect = () => this.props.onSelect(this.props.tool.index);
	render() {
		let className = this.props.selected ? "toggle-tool toggle-tool--selected" : "toggle-tool";
		return <span className={ className } onClick={ this.onSelect }>{ this.props.tool.title }</span>;
		}
	}

	function Toggle(props) {
		return <div className="toggle">
			{props.tools.map((tool)=>
				<ToggleTool
					tool={tool}
					key={tool.index}
					selected={props.selectedTool === tool.index}
					onSelect={props.onSelect} />)}
				</div>
			}


ToolSelector.propTypes = {
	tool: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
	tools: state.tools
})

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectTool, onToolSelect }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolSelector);
