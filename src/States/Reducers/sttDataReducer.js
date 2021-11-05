const sttDataReducer = (dataState = {}, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return action.data;
            break;
        default:
            return dataState;
    }
}

export default sttDataReducer;