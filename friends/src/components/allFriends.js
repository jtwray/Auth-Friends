import React ,{useEffect,useState}from "react"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'
import { Loader } from "../utils/Loader"
import axiosWithAuth from "../utils/axiosWithAuth"

export const AllFriends = (props) => {
const [allfriends, setAllfriends] = useState([])
const [isLoading, setisLoading] = useState(true)

useEffect(()=>{
    
    axiosWithAuth().get(`http://localhost:5000/api/friends`)
    .then(res=>{setAllfriends(res.data);console.log(res)})
    .then(_=>setisLoading(false))
    .catch(res=>console.error(res))
},[])
    return (
        <>
        {props.isError&&props.isError}
        
        {
        isLoading? <Loader /> : allfriends&&allfriends.map(friend => <div ><Link to={`dashboard/allfriends/${friend.id}`}>{friend.name}</Link></div>)
        }


       </>
    )
}

const mapStateToProps=(state)=>{
    return{
        allfriends:state.allfriends,
        isLoading:state.isLoading,
        error:state.isError}}

export default connect(mapStateToProps, {})(AllFriends)