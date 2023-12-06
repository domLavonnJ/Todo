import { PersonAction } from "../actions/actions";

const editName = (val: any) => {
    return {
        type: PersonAction.editName,
        payload: val
    }
}

const resetname = () => {
    return {
        type: PersonAction.resetName
    }
}

export { editName, resetname } 