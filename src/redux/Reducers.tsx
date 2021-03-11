import { SET_THEME, SET_VIEW, SET_PROPERTY } from './Constants';
import { defaultStyles } from '../assets/mockData/defaultStyles';

const property = (state = null, action) => {
	switch (action.type) {
		case SET_PROPERTY:
			return action.property;
		default:
			return state;
	}
};

const theme = (state = defaultStyles, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.theme;
		default:
			return state;
	}
};

const view = (state = null, action) => {
	switch (action.type) {
		case SET_VIEW:
			return action.view;
		default:
			return state;
	}
};

// COMBINE REDUCERS //
export default {
    property,
	theme,
    view,
};