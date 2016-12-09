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
				<input type="radio" name="tool" id="brush-select"
					value={BRUSH}
					checked={tool === BRUSH}
					onChange={ (e) => { action(e.target.value) } } />
				<label htmlFor="brush-select">Brush</label>
			</div>

			<div className="radio">
				<input type="radio" name="tool" id="stamp-select"
					value={STAMP}
					checked={tool === STAMP}
					onChange={ (e) => { action(e.target.value) } } />
				<label htmlFor="stamp-select">Stamp</label>
			</div>

			<div className="radio">
				<input type="radio" name="tool" id="eraser-select"
					value={ERASER}
					checked={tool === ERASER}
					onChange={ (e) => { action(e.target.value) } } />
				<label htmlFor="eraser-select">Eraser</label>
			</div>
		</div>
	);
}

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
		index: "3",
		brush_color: "#ffffff"

	}
];

class ToolSelect extends React.Component {
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

	// onErase(event){
	// 	this.setState({
	// 		selectedTool: ERASER
	// 	});
	// }
	// onBrush(event){
	// 	this.setState({
	// 		selectedTool: BRUSH
	// 	});
	// }
	// onStamp(event){
	// 	this.setState({
	// 		selectedTool: STAMP
	// 	});
	// }
	render() {
		return <div>
			<div
				className="activeTool">
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
		let className = this.props.selected ? `${this.props.tool.name} active` : `${this.props.tool.name} inactive`;
		return <button className={ className } onClick={ this.onSelect }>{ this.props.tool.title }</button>;
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
				tool: PropTypes.oneOf(['BRUSH', 'STAMP', 'ERASER']).isRequired,
				action: PropTypes.func.isRequired,
				// onBrush: PropTypes.shape({
				// 	brush_size: PropTypes.number.isRequired,
				// 	brush_color: PropTypes.string.isRequired
				// }).isRequired,
				// onErase: PropTypes.shape({
				// 	brush_size: PropTypes.number.isRequired,
				// 	brush_color: PropTypes.string.isRequired
				// }).isRequired,
				// onStamp: PropTypes.shape({
				// 	image_stamp: PropTypes.string.isRequired,
				// }).isRequired

			};
			const mapStateToProps = state => ({
				tools: state.tools
			})

			function mapDispatchToProps(dispatch) {
				return bindActionCreators({ selectTool, onToolSelect }, dispatch);
			}

			export default connect(mapStateToProps, mapDispatchToProps)(ToolSelector);
