import React, { useContext } from 'react'
import { authContext } from '../App'

export default function Userdata() {
  const {userdata} = useContext(authContext)
  console.log(userdata)
    return (
    <div>
        <h3>{userdata?.userName}</h3>
        <h4>{userdata?.email}</h4>
        <img src={userdata?.profileUrl}/>
    </div>
  )
}
