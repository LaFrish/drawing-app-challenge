import React, { PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { resetCanvas } from '../actions/index';


let ctx;
export default class ResetCanvas extends Component {
	constructor(props) {
		super(props);
		this.resetCanvas = this.resetCanvas.bind(this);
	}

	resetCanvas(){
		const canvas = document.querySelector('canvas');
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0,0, window.innerWidth,  window.innerHeight);
	}

	render() {

		return (
			<div id="clear">
				<button
					onClick={ this.resetCanvas }
					>RESET</button>
			</div>
		)
	}
}

ResetCanvas.propTypes = {
	resetCanvas: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
}
