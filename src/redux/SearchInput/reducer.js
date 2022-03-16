const initialState = ''

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'CHANGE_INPUT' : 
            return action.payload
        case 'RESET_INPUT':
            return ''
        default: return state
    }
}

export default reducer