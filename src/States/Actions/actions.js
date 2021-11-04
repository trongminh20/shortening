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