function sum(currentState, action) {
    var DEFAULT_STATE = 4;
    if (currentState == undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch (action.type) {
        case 'SUM':
            nextState = parseInt(action.number1) + parseInt(action.number2);
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}