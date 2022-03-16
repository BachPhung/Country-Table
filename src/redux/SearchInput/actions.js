const onChangeInput = (input) =>{
    return{
        type: 'CHANGE_INPUT',
        payload: input
    }
}
const resetInput = () =>{
    return{
        type: 'RESET_INPUT'
    }
}
export default {
    onChangeInput,
    resetInput
}