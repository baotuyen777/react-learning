//middleware
const logger=function(store){
    return function(next){
        return function(action){
            console.group('logger')
            console.log('currentState ==',store.getState());
            console.info('nex(action) // action == ',action)
            next(action);
            console.log('currentState== ',store.getState());
            console.groupEnd('logger');
            next(action);
        }
    }
}
//step 1.2
var store = Redux.createStore(combineReducer,Redux.applyMiddleware(logger));
//end step 1.2
//step 1.3
function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count;
    document.getElementById('valSum').innerHTML = state.sum;
}

store.subscribe(render);
render();
//end 1.3
