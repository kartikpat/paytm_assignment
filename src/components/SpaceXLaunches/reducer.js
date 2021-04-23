import { actionType } from './constants';

export const initialState = {
    alertMsg: null,
    launches: null,
    selectedFilters: {},
};

export const spaceXLaunchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_LAUNCHES_SUCCESS:
            return { ...state, launches: action.payload, alertMsg: null };
        case actionType.GET_LAUNCHES_FAIL:
            return { ...state, alertMsg: action.payload };
        case actionType.GET_LAUNCHES_REQUESTING:
            return { ...state, alertMsg: null };
        case actionType.SET_SELECTED_FILTERS:
            return {
                ...state,
                selectedFilters: {
                    ...state.selectedFilters,
                    [action.payload.id]: action.payload.value,
                },
            };
        default:
            return state;
    }
};
