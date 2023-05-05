import { useEffect, useState } from 'react';

const ProfilePage = ()=>{

  const [user, setUser] = useState(null);
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  useEffect(()=>{

    fetch(`https://dummyjson.com/users/${id}`)
    .then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log("response",res)
        setUser(res);
        console.log("user",user);
    })
  },[id,token])

  if (!user) {
    return <div>Loading...</div>;
  }

    return (
        <div className='profile-div'>
            <h1>Profile Page</h1>
            <div className='name-div'>Welcome,<b>{user.firstName} {user.lastName}</b></div>
            <div className='info-div'>
            <div className='img-div'><img src={user.image}></img></div>
            <div><b>Username -</b> {user.username}</div>
            <div> <b>Email -</b> {user.email}</div>
            <div><b>Mobile No. </b> {user.phone}</div>
            <div><b>Address -</b> {user.address.address},{user.address.city} </div>
            <div><b>Date of Birth -</b> {user.birthDate}</div>
            <div><b>Gender -</b> {user.gender}</div>
            </div>
        </div>
    )
}

export default ProfilePage;