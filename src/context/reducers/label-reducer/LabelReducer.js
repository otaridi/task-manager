import {addLabel} from "./LabelActions";

export default function labelReducer(labelState, action) {
    switch (action.type) {
        case addLabel: {
            const {label,color} = action
            return [...labelState, {label, color}]
        }
        default:
            return labelState
    }
}