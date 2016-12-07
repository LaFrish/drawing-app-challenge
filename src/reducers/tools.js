import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, RESET_CANVAS, SAVE_CANVAS } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#000000"
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
		return Object.assign({}, state, {
			brush_size: action.text
		})
		case CHANGE_COLOR:
		return Object.assign({}, state, {
			brush_color: action.color
		})
		case SELECT_TOOL:
		return Object.assign({}, state, {
			tool: action.text
		})
		case RESET_CANVAS:
		return Object.assign({}, state, {
			canvas: initialState.canvas
		})
		case SAVE_CANVAS:
		return Object.assign({}, state, {
			saveCanvas: action.save
		})

		default:
		return state
	}
}
