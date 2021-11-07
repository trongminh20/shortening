//received input link and set it to requestState
export const shortenLink = link => {
    return dispatch => {
        dispatch({
            type: "SHORTEN",
            link: link
        });
    }
}
//set fetched data to resultState in resultReducer
export const setResult = res => {
    return dispatch => {
        dispatch({
            type: "RECEIVED",
            result: res
        });
    }
}

//set data from data.json to Advance Statistic block
// this is not neccessary in the reality. 
//just for practice fetching and hadnle data.json
export const setSttData = data => {
    return dispatch => {
        dispatch({
            type: "SET_DATA",
            data: data
        });
    }
}