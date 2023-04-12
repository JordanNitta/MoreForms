import React from 'react'

const DisplayData = ({firstName, lastName, email, password, confirmPassword}) => {
    return (
        <div>
            {/* Users Info: */}
            {/* <h3>{createUser.firstName}</h3>
            <h3>{createUser.lastName}</h3>
            <h3>{createUser.email}</h3>
            <h3>{createUser.password}</h3>
            <h3>{createUser.confirmPassword}</h3> */}
            <h3>User info</h3>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{email}</h3>
            <h3>{password}</h3>
            <h3>{confirmPassword}</h3>
        </div>
    )
}

export default DisplayData
