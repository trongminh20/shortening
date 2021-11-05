export const shortenLink = link => {
    return dispatch => {
        dispatch({
            type: "SHORTEN",
            link: link
        });
    }
}

export const setResult = res => {
    return dispatch => {
        dispatch({
            type: "RECEIVED",
            result: res
        });
    }
}

export const setSttData = data => {
    return dispatch => {
        dispatch({
            type: "SET_DATA",
            data: data
        });
    }
}