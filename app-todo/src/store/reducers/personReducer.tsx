import { PersonAction } from "../actions/actions"

const initialState = {
    name: ""
}

const PersonReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case PersonAction.editName:
            return {
                ...state,
                name: action.payload
            }

        case PersonAction.resetName:
            return {
                ...state,
                name: ""
            }

        default:
            return state
    }

}

export default PersonReducer;