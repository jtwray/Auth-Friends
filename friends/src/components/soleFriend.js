import React from "react"

export const SoleFriend = ({ friend }) => {


    return (

        <div key={`${friend.id} ${Math.Random()}`}>
            <p>name: {friend.name}</p>
            <p>age: {friend.age}years old</p>
            <p>email: {friend.email}</p>


        </div>
    )
}