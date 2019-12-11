import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { Loader } from '../utils/Loader'
import { addFriend } from '../actions'

import uuid from 'uuid'
import axiosWithAuth from "../utils/axiosWithAuth"


export const AddNewFriend = (props) => {
    console.log("props:", props, "props.addFriend:", props.addFriend)
    const initialFriend = { id: uuid(), age: "", name: "", email: "" }
    const [friendObj, setFriendObj] = useState(initialFriend)
    const [allfriends, setAllFriends] = useState([{},])
    const[isLoading,setIsLoading]=useState(true)
    const handleFriendObj = (event) => {
        setFriendObj({ ...friendObj,key:uuid(), [event.target.name]: event.target.value })
    };


    const makeFriend = (friendObj) => {
        axiosWithAuth().post(`http://localhost:5000/api/friends`, friendObj)
            .then(res => {
                console.log(res, "addfreindszzz");
        setAllFriends(res.data[res.data.length-1])
            })
            .then(_=>setIsLoading(false))
            .catch(res => console.error(res))
        // props.addFriend(friendObj)
    }
    const handleSubmit = event => {
        event.preventDefault();

        makeFriend(friendObj);
        setFriendObj(initialFriend)
    }
    return (

        <>
            <form onSubmit={handleSubmit}>

                <input
                    name="name"

                    value={friendObj.name}
                    placeholder="name"
                    onChange={handleFriendObj}
                />
                <input
                    name="age"

                    value={friendObj.age}
                    placeholder="age"
                    onChange={handleFriendObj}
                />
                <input
                    name="email"

                    value={friendObj.email}
                    placeholder="email"
                    onChange={handleFriendObj}
                />
                <button>Create Friend</button>
            </form>
            {!isLoading ? allfriends.name : <Loader />}

        </>
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        isError: state.isError
    }

}
export default connect(mapStateToProps, { addFriend })(AddNewFriend)
