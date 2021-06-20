import initialState from './initialState'

export default function iechoReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_ROW": {
            const { iechoResponses = [] } = { ...state }
            const { newRow = {} } = { ...action.payload }
            const auxInitial = [ ...iechoResponses ]
            auxInitial.unshift(newRow)
            return {
                ...state,
                iechoResponses: auxInitial
            }
        }
        default: return state;
    }
}