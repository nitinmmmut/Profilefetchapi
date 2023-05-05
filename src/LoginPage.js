import { useState } from "react";
const LoginPage = ()=>{

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");


  function handleLoginBtn(){
    
    fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    username:userName,
    password:password
    })
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    }).then((data) => {
      console.log(data)
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);
      window.location.href = '/profile';
    })
    .catch((error) => {
      alert('Error: Invalid username or password!');
    });
}


    return (
        <div className="login-div">
        <input type="text" placeholder="Enter Username" value={userName} onChange={(e)=>(setuserName(e.target.value))} />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>(setpassword(e.target.value))} />
        <button onClick={handleLoginBtn}>Login</button>

        </div>
    )
}
export default LoginPage;