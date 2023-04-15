import React from 'react'
import Alert from './Alert'

function AddPet() {
    return (
        <div className="container" style={{ display: 'flex' }}>
            <img src="..." alt="img" />
            <div><h1>This is Add pet</h1></div>
            <button type="button" className="btn btn-success" style={{ justifyContent: 'flex-right' }}>Add Your pet</button>
            <Alert />
        </div>
    )
}

export default AddPet
