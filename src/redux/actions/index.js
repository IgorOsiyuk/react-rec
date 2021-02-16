import ApiService from "../../api-service/api-service";

export const stateTypeActions = {
    GET_STAFF: "GET_STAFF",
    GET_STAFF_REQUEST: "GET_STAFF_REQUEST",
    GET_STAFF_ERROR: "GET_STAFF_ERROR",
    DELETE_STAFF: "DELETE_STAFF",
    ADD_STAFF: "ADD_STAFF",
};

export function getAllStaffList(payload) {
    return {
        type: stateTypeActions.GET_STAFF,
        payload,
    };
}
export function getAllStaffListRequest() {
    return {
        type: stateTypeActions.GET_STAFF_REQUEST,
    };
}
export function getAllStaffListError() {
    return {
        type: stateTypeActions.GET_STAFF_ERROR,
    };
}
export function addNewPerson(payload) {
    return {
        type: stateTypeActions.ADD_STAFF,
        payload,
    };
}
export function deletePerson(payload) {
    return {
        type: stateTypeActions.DELETE_STAFF,
        payload,
    };
}

const service = new ApiService();
export function getAllStaffList_service() {
    return (dispatch) => {
        dispatch(getAllStaffListRequest());
        return service
            .getAllUsers()
            .then((res) => {
                dispatch(getAllStaffList(res.data));
            })
            .catch((err) => {
                dispatch(getAllStaffListError());
            });
    };
}
const stateActions = {
    getAllStaffList,
    getAllStaffListRequest,
    getAllStaffListError,
    getAllStaffList_service,
    addNewPerson,
    deletePerson,
};

export default stateActions;
