import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { editName, resetname } from '../../store/actionTypes/PersonAType'

const InputPerson = () => {

    const [name, setName] = useState("")
    let store: any = useSelector((store: any) => store.personR)
    let dispatch = useDispatch()

    const changeName = () => {
        console.log(name)
        dispatch(editName(name))

    }

    const resetName = () => {

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
            <button onClick={resetname} >Erase</button>

        </>

        }

    </>
    )
}

export default InputPerson