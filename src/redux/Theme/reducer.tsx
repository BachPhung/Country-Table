import { LIGHT_MODE, NIGHT_MODE, ThemeDispatchTypes } from "../../types/types";
const initialState: any = JSON.parse(localStorage.getItem('theme') || JSON.stringify(false))

const reducer = (state:boolean=initialState,action: ThemeDispatchTypes): boolean =>{
    switch(action.type){
        case NIGHT_MODE:{
            return true;
        }
        case LIGHT_MODE:{
            return false
        }
        default: return state
    }
}

export default reducer