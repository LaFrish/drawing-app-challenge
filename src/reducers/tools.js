import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, RESET_CANVAS, SAVE_CANVAS, IMAGE_STAMP, START, END } from "../constants/ActionTypes";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "transparent",
	background_color: "#FFFFFF",
	imageStamp: 'false',
	saveCanvas: 'false',
	resetCanvas: 'false',
	isDrawing: false
	// tools:[BRUSH, STAMP, ERASER]
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case ERASER:
		return Object.assign({}, state, {
			tool: action.tool,
			brush_color: "#fff",
			brush_size: "20"
		})
		case BRUSH:
		return Object.assign({}, state, {
			tool: action.tool,
		})
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
		case IMAGE_STAMP:
		return Object.assign({}, state, {
			imageStamp: action.imageObject
		})
		case START:
		return Object.assign({}, state, {
			isDrawing: true
		})
		case END:
		return Object.assign({}, state, {
			isDrawing: false
		})

		default:
		return state
	}
}
