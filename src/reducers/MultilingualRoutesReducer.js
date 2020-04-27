import { UPDATE_MULTILINGUAL_ROUTES } from 'constants/types';

const initialState = {}

export default function(state = initialState, action) {
	switch(action.type) {
		case UPDATE_MULTILINGUAL_ROUTES:
			return action.payload;
		default:
			return state;
	}

}
