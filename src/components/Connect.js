import App from "./App"
import { useState } from 'react'
import { Redirect } from "react-router"

const Connect = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenitfied, setAuthentified] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username) {
            alert("Please enter your informations")
            return
        }
        setUsername('')
        setPassword('')
        checkPassword(username, password)
    }

    const checkPassword = async (username, password) => {
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()

        data.map((user)=>(username===user.username && password===user.password ? setAuthentified(true) : alert("Wrong password")))

        return data
    }
    return (
        <div>
            {isAuthenitfied ? <Redirect to='/app'></Redirect> : 
            <div className="container">
                <form className='add-form'>
                    <div className='form-control'>
                        <label>Username</label>
                        <input type="text" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value='Login' className='btn btn-block' onClick={onSubmit}/>
                </form>
            </div>}
      
        </div>
    )
}

export default Connect
