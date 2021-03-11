import { SET_THEME } from './Constants';
import { defaultStyles } from '../assets/mockData/defaultStyles';


const theme = (state = defaultStyles, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.test;
		default:
			return state;
	}
};

// COMBINE REDUCERS //
export default {
	theme
};