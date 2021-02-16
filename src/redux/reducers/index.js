import { stateTypeActions } from "../actions";

export const initialState = {
    staffList: {
        list: [],
        isLoading: false,
        error: false,
    },
};

function staffStore(state = initialState, action) {
    switch (action.type) {
        case stateTypeActions.GET_STAFF: {
            return {
                ...state,
                staffList: {
                    ...state.staffList,
                    list: action.payload,
                    isLoading: false,
                    error: false,
                },
            };
        }
        case stateTypeActions.GET_STAFF_REQUEST: {
            return {
                ...state,
                staffList: {
                    ...state.staffList,
                    isLoading: true,
                },
            };
        }
        case stateTypeActions.GET_STAFF_ERROR: {
            return {
                ...state,
                staffList: {
                    ...state.staffList,
                    isLoading: false,
                    error: true,
                },
            };
        }
        case stateTypeActions.ADD_STAFF: {
            return {
                ...state,
                staffList: {
                    ...state.staffList,
                    list: [...state.staffList.list, action.payload],
                },
            };
        }
        case stateTypeActions.DELETE_STAFF: {
            return {
                ...state,
                staffList: {
                    ...state.staffList,
                    list: state.staffList.list.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        }

        default:
            return state;
    }
}
export default staffStore;
