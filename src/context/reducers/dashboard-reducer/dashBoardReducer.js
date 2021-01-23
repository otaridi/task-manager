import {changeColor} from "./dashBoardActions";

export default function dashBoardReducer(state, action) {
    switch (action.type) {
        case changeColor: {
            const {color, status} = action
            return state.map(el => el.status === status ? {...el, color} : el)
        }
        default:
            return state
    }
}