import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [credentials, setCredentials] = useState({ username: "", password: "" })

    const handleCredentials = event => setCredentials(...credentials, { [event.target.name]: event.target.value });
    const login = event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/login`, credentials)
            .then(res =>{
                console.log(res);
                localStorage.setItem(`token`, res.data.payload);}
                // history.push("/dashboard")
            )
            .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="username"
                    onChange={handleCredentials}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleCredentials}
                />
                <button>Login</button>
            </form>

        </div>
    )
}

export default Login