import React from 'react'

const SingleUser = ({user}) => {
  return (
    <div className="card w-75 mx-auto my-5" >
     
    <div className="card-body d-flex">
    <img className="" src={user.picture.large} alt=".."/>
    <div className="c-content p-3">
    <p className="card-title "> First NAme :  {user.name.first} </p>
    <p className="card-title">Last Name : {user.name.last}</p>
    <p className="card-text">City : {user.location.city}</p>
    <p className="card-text">Email Adres : {user.email}</p>
    </div>
  </div>
</div>
  )
}

export default SingleUser
