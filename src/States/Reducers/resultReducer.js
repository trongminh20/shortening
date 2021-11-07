const resultReducer = (resultState = [], action) => {
    switch (action.type) {
        case "RECEIVED":
            return [...resultState, action.result]
            break;
        default:
            return resultState;
    }
}

export default resultReducer;