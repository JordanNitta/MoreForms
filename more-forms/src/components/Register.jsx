import { useState } from "react"
import DisplayData from "./DisplayData";

const Register = () => {
    const [createUser, setCreateUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [formErros, setFormErros] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        confirmPassword: true
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleFormImput = (e) => {
        setIsSubmitted(false)
        const keyToUpdate = e.target.name
        const valuesToUpdate = e.target.value

        // handle inputs
        setCreateUser({
        // Make a copy of form
            ...createUser,
            [keyToUpdate]: valuesToUpdate
        })
        const errors = { ...formErros }
        switch(keyToUpdate){
            case 'firstName':
                valuesToUpdate.length < 3 ?
                    errors.firstName = "Name needs to be at least 3 character" :
                    errors.firstName = ""
                break;
            case 'lastName':
                valuesToUpdate.length < 3 ?
                    errors.firstName = "Name needs to be at least 3 character" :
                    errors.firstName = ""
                break;
            case 'email':
                valuesToUpdate.length < 5 ?
                    errors.email = "Email needs to be longer then 5 characters" :
                    errors.email = ""
                break;
            case 'password':
                valuesToUpdate.length < 5 ?
                    errors.password = "Password needs to be longer then 5 characters" :
                    errors.password = ""
                break;
            case 'confirmPassword':
                valuesToUpdate.length < 5 ? 
                    errors.confirmPassword = "Password must be at least 5 character long" : 
                    valuesToUpdate !== createUser.password ?
                    errors.confirmPassword = "Password must match" :
                    errors.confirmPassword = ""
                break;
            default:
        }
        setFormErros(errors)
    }

    const handleFormSubmition = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        // Will send the complete form
        const newUser = createUser
        
    }

    
    
    // const formFilledOut = () => {
    //     if(isSubmitted) {
    //         setIsSubmitted("Signed Up Succesful")
    //     } else {
    //         setIsSubmitted("Please Fill Out Form")
    //     }
    // }
    
    return (
        <div className= "flex col justify-center items-center h-screen bg-gray-100">
            <form 
                onSubmit={handleFormSubmition}
                className="bg-white rounded-md w-96 p-6 shawdow-lg grid">
                {
                    
                }
                <label htmlFor="fistName" className="mt-2">First Name</label>
                <input 
                className="mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm"
                type="text" 
                name="firstName"
                onChange={handleFormImput}
                value={createUser.firstName}/>
                
                <div>
                    <p style={{color: "red"}}>{formErros.firstName}</p>
                </div>

                <label htmlFor="lastName" className="mt-2">Last Name</label>
                <input 
                type="text" 
                className="mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm"
                name="lastName" 
                onChange={handleFormImput}
                values={createUser.lastName}/>
                
                <div>
                    <p style={{color: "red"}}>{formErros.lastName}</p>
                </div>

                <label htmlFor="email" className="mt-2">Email</label>
                <input 
                type="text"
                className="mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm"
                name="email" 
                onChange={handleFormImput}
                values={createUser.email}/>
                
                <div>
                    <p style={{color: "red"}}>{formErros.email}</p>
                </div>

                <label htmlFor="password" className="mt-2">Password</label>
                <input 
                type="text" 
                className="mt-2 dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm"
                name="password"
                onChange={handleFormImput} 
                values={createUser.password}/>
                
                <div>
                    <p style={{color: "red"}}>{formErros.password}</p>
                </div>

                <label htmlFor="confirmPassword" className="mt-2">Confirm Password</label>
                <input 
                type="text" 
                className="mt-2 dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm"
                name="confirmPassword"
                onChange={handleFormImput}
                values={createUser.confirmPassword}
                />
                <div>
                    <p style={{color: "red"}}>{formErros.confirmPassword}</p>
                </div>
                {
                    formErros.firstName && formErros.lastName && formErros.email && formErros.password && formErros.confirmPassword ? 
                    <button disabled>Submit</button> :
                    <button>Submit</button> 
                }
            </form>
            {
                isSubmitted ? 
                <DisplayData createUser={createUser}/> :
                ""
            }
        </div>
    )
}

export default Register
