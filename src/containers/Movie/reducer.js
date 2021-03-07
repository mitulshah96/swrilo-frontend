import {
    GET_MOVIES_LIST,
    GET_MOVIES_LIST_REQUEST,
    GET_MOVIES_LIST_FAILURE,
} from './constant';

export const initialState = {
    isLoading: false,
    isErrored: false,
    data: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case GET_MOVIES_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isErrored: false,
            };

        case GET_MOVIES_LIST:
            return {
                ...state,
                isLoading: false,
                data: action.data.data.data.movies.results,
                value: action.value,
            };

        case GET_MOVIES_LIST_FAILURE:
            return {
                ...state,
                isErrored: true,
                isLoading: false,
            };
        default:
            return initialState;
    }
}
