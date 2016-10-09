//step 1.2
var store = Redux.createStore(combineReducer);
//end step 1.2
//step 1.3
function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count;
    document.getElementById('valSum').innerHTML = state.sum;
}
render();
store.subscribe(render);
//end 1.3
