import React, { useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {login} from '../actions'


const Login = (props) => {
    
    const [credentials, setCredentials] = useState({ username: "", password: "" })

    const handleCredentials = event => setCredentials({...credentials,  [event.target.name]: event.target.value });
    const dologin = event => {
        event.preventDefault();
        // props.login(credentials)
        axios.post(`http://localhost:5000/api/login`, credentials)
            .then(res => {
                console.log("res:",res,"props.history:",props.history);
                props.history.push("/");
                localStorage.setItem("token",res.data.payload)
            }
            )
            .catch(err => console.error(err))
    }
    return (
        <div>
            <form onSubmit={dologin}>
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
const mapStateToProps=state=>{return{}}

const mapDispatchToProps=(state)=>{return{login:state.login}}
export default connect(mapStateToProps,mapDispatchToProps)(Login)