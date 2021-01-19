import {FILTER} from "../cart-reducer/cartActions";

export default function filterReducer(state, action) {
    switch (action.type) {
        case FILTER: {
            const {searchState, startDate, endDate} = action
            return {
                ...state,
                searchState,
                startDate,
                endDate
            }
        }
        default:
            return state
    }
}