const requestReducer = (requestState = "sample lnk", action) => {
    switch (action.type) {
        case "SHORTEN":
            return action.link;
            break;
        default:
            return requestState;
    }
}

export default requestReducer;