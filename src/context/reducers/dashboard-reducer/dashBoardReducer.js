import {changeColor, addBoard, deleteBoard, edit} from "./dashBoardActions";

export default function dashBoardReducer(state, action) {
    switch (action.type) {
        case addBoard: {
            const {status, color} = action
            return [...state, {status, color}]
        }
        case changeColor: {
            const {color, status} = action
            return state.map(el => el.status === status ? {...el, color} : el)
        }
        case deleteBoard: {
            const {status} = action
            return state.filter(el => el.status !== status)
        }
        case edit: {
            const {status, title} = action
            return state.map(el => el.status === status ? {...el, status: title} : el)
        }
        default:
            return state
    }
}