const init = {
 
counter : 1 
}
function rootRuducer (state = init , action) {
    switch(action.type){
        case 'INCREMENT':
            return { counter : state.counter + 1}
        case 'DECREMENT':
            return { counter : state.counter - 1}
        default: 
            return state
    }
}

export default rootRuducer ;