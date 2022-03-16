import { LightMode, NightMode } from "../../types/types"

const NIGHT_MODE = (): NightMode =>{
    return {
        type: 'NIGHT_MODE'
    }
}
const LIGHT_MODE = (): LightMode =>{
    return {
        type: 'LIGHT_MODE'
    }
}

export default {
    NIGHT_MODE,
    LIGHT_MODE
}