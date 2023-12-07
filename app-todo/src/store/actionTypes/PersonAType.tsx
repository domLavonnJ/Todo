import { PersonAction } from "../actions/actions";

const editName = (val: any) => {
    return {
        type: PersonAction.editName,
        payload: val
    }
}

const resetName = () => {
    return {
        type: PersonAction.resetName
    }
}

export { editName, resetName } 