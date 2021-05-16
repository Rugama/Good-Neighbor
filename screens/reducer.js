import { ADD_POST, DELETE_POST } from '../action/types';

const initialState = {
    list: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                list: state.list.concat({
                    key: Math.random(),
                    post: action.data

                })
            };
        case DELETE_POST:
            return {
                ...state,
                list: state.list.filter((item) =>
                    item.key !== action.key)
            };
        default:
            return state;
    }
}

export default reducer;