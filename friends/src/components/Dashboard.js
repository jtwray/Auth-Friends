import React from 'react'
import {Link} from 'react-router-dom'

export const Dashboard=()=>{


    return(


        <>

<Link to="/login">login</Link>
<Link to="/">dashboard</Link>
<Link to="/dashboard/allfriends">allfriends</Link>
<Link to="/dashboard/addfriend">add friend</Link>

        </>
    )
}