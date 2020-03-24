const init = { user : " " };

function rootRuducer (state = init , action) {
    switch(action.type){
        case 'INCREMENT':
            return { user : state.user + 'REDUX' }
        case 'DECREMENT':
            return { user : state.user - 'REDUX'}
        default: 
            return state
    }
}

export default rootRuducer ;