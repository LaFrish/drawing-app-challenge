import React, { PropTypes, Component  } from "react";
// import { connect } from 'react-redux';
import { saveCanvas } from '../actions/index';
// import Canvas from "../components/Canvas";

export default class SaveCanvas extends Component {
	constructor(props, context) {
		super(props, context);
		this.saveCanvas = this.saveCanvas.bind(this);
	}
	saveCanvas(event) {
		event.preventDefault();
		const canvas = document.querySelector('canvas');
		const dataURL = canvas.toDataURL('image/png');
		let downloadWindow = window.open('about:blank','canvas image');
		downloadWindow.document.write("<img src='"+  dataURL +"' alt='from canvas'/>");
	}
	render(){
		return (
			<div>
				<button
					id="save-select"
					value={saveCanvas}
					checked={saveCanvas === true}
					onClick={this.saveCanvas} >UPLOAD</button>
				</div>
			);
		}
	}
	SaveCanvas.propTypes = {
		saveCanvas: PropTypes.string.isRequired,
		action: PropTypes.func.isRequired
	};
