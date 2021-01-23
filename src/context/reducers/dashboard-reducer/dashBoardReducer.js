import {changeColor,addBoard} from "./dashBoardActions";

export default function dashBoardReducer(state, action) {
    switch (action.type) {
        case addBoard:{
            const {status,color} = action
            return [...state, {status, color}]
        }
        case changeColor: {
            const {color, status} = action
            return state.map(el => el.status === status ? {...el, color} : el)
        }
        default:
            return state
    }
}