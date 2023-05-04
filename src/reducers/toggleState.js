const initialState =0;

const changeTheNumber = (state = initialState, action) => {
    switch(action.type){
        case "TOGGLE": return !state;
        case "SETZERO": return 0;
        case "SETONE": return 1;
        default: return state;
    }
}

export default changeTheNumber;