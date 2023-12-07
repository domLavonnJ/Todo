import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { editName, resetName } from '../../store/actionTypes/PersonAType'

const InputPerson = () => {

    const [name, setName] = useState("")
    let store: any = useSelector((store: any) => store.personR)
    let dispatch = useDispatch()

    const changeName = () => {
        dispatch(editName(name))

    }

    const eraseName = () => {
        dispatch(resetName())

    }

    return (<>

        {store.name === "" && <>
            <h1>Input name</h1>
            <input name="person_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder='Enter Name' />
            <button onClick={changeName} >Add</button>
            <button onClick={eraseName} >Erase</button>

        </> || store.name !== "" && <h1>Hello {store.name} </h1>

        }
    </>
    )
}

export default InputPerson