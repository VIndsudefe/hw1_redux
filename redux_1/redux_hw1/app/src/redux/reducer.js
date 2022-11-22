




const initialState = {
    counter: 0
}

export function reducer (state=initialState, action) {

    if (action.type === "INCREMENT"){
        return {counter: action.payload}
    }
    else if(action.type === "DECREMENT") {
        return {counter: action.payload}
    }
    return state
}