import { useState } from "react"
import DisplayData from "./DisplayData"
import eye from '../assets/img/eye.svg'
import eyeSlash from '../assets/img/eyeSlash.svg'
const Login = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [firstNameError, setFirstNameError] = useState(true)
    const [lastNameError, setLastNameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmPasswordError, setConfirmPasswordError] = useState(true)

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleCreateUser = (e) => {
        e.preventDefault();
        // If all values are false wont let you submit form
        if(firstNameError && lastNameError && emailError && passwordError && confirmPassword){
            setIsSubmitted()
        } else {
        // If all values are true will create a new object and we can pass it into our backend
            setIsSubmitted(true)
            const newUser = {firstName, lastName, email, password, confirmPassword};
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 3){
            setFirstNameError("Character need to be longer then 3")
        } else {
            setFirstNameError("")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 3) {
            setLastNameError("Character need to be longer then 3")
        } else {
            setLastNameError("")
        }
    }

    // const emailRegex = '^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$';
    const handleEmail = (e) => {
        setEmail(e.target.value) 
        if(e.target.value.length < 5){
            setEmailError("Email needs to be greater then 5 character")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value < 8){
            setPasswordError("Password must be greater then 8 character")
        } else {
            setPasswordError("")
        }
    }

    const handlePasswordMatch = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords do not match")
        } else {
            setConfirmPasswordError("")
        }
    }

    // const [eye]
    const [isTouched, setIsTouched] = useState(false)
    const handleBlur = (e) => {
        setIsTouched(true) 
    }
    // const handleTouch = (e) => {
    //     setIsTouched(true)
    // }
    
    return (
        <div className= "flex col justify-center items-center h-screen bg-gray-100">
            <form 
                onSubmit={handleCreateUser}
                className="bg-white rounded-md w-96 p-6 shawdow-lg grid">
                {
                    
                }
                <label htmlFor="fistName" className="mt-2">First Name</label>
                <input 
                className={`mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm  ${firstNameError && isTouched ? 'border-red-500' : 'border-1 border-gray-500'}`}
                type="text" 
                name="firstName"
                onChange={handleFirstName}
                onBlur={handleBlur}
                placeholder="Enter First Name"
                value={firstName}/>

                {
                    <p style={{color: "red"}}>{firstNameError}</p>
                }

                <label htmlFor="lastName" className="mt-2">Last Name</label>
                <input 
                type="text" 
                className={`mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm ${firstNameError && isTouched ? 'border-red-500': 'border-1 border-gray-500'}`}
                onBlue={handleBlur}
                onChange={handleLastName}
                value={lastName}
                name="lastName" 
                />

                {
                    
                    <p className="text-red-500">{lastNameError}</p> 
                    
                }

                <label htmlFor="email" className="mt-2">Email</label>
                <input 
                type="text"
                className={`mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm ${emailError && isTouched ? 'border-red-500': 'border-1 border-gray-500'}`}
                name="email" 
                onBlur={handleBlur}
                onChange={handleEmail}
                value={email}
                />

                {
                
                    <p className="text-red-500">{emailError}</p> 
                    
                }
                
                <label htmlFor="password" className="mt-2">Password</label>
                    <input 
                    type="password" 
                    className={`mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm ${passwordError && isTouched ? 'border-red-500': 'border-1 border-gray-500'}`}
                    name="password"
                    onChange={handlePassword}
                    onBlue={handleBlur}
                    value={password}
                    />
                {
                
                    <p className="text-red-500">{passwordError}</p> 
                
                }

                <label htmlFor="confirmPassword" className="mt-2">Confirm Password</label>
                <input 
                type="password" 
                className={`mt-2  dark:bg-gray-100 h-9 rounded-md border border-gray-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none p-2 text-sm ${confirmPasswordError && isTouched ? 'border-red-500': 'border-1 border-gray-500'}`}
                name="confirmPassword"
                onChange={handlePasswordMatch}
                onBlur={handleBlur}
                value={confirmPassword}
                />
                
                {
                

                    <p className="text-red-500">{confirmPasswordError}</p> 
                
                }
                
                    <button type="submit" className="mt-3 rounded-md h-9  dark:bg-gray-100 border border-gray-500 hover:bg-gray-500" disabled={firstNameError && lastNameError && emailError && password && confirmPassword }>Submit</button> 
            </form>
            
            {
                isSubmitted ? 
                <DisplayData firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/> :
                ""
            }

        </div>
    )
}

export default Login
