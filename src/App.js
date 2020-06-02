import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';



function App() {
  const [user, setUser] = useState({isNull: true})

  const responseFacebook = (response) => {
    console.log(response);
    setUser((oldUser) => {
      return response
    })
  }

  if(!user.isNull) return (
    <div>
      <img alt="Profile" height={user.picture.data.height} width={user.picture.data.width} src={user.picture.data.url} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => setUser((oldUser) => {return {isNull: true}})}>Logout</button>
    </div>
  )

  return (
    <div className="App">
      <FacebookLogin
        appId={process.env.REACT_APP_FB_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook} />
    </div>
  );
}

export default App;
