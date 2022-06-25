import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
      !isAuthenticated && (
        <div> 
          <div class="container-name">
          <a class="example_e" href="#"   onClick={() => loginWithRedirect()}><span>Click here to get in APP</span></a>
          </div>
          <div className='imagediv'>
            <img src="https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate-top-view-copyspace_2829-17200.jpg?w=2000" 
            alt="Cinque Terre" width="1000" height="300"></img>
          <div class="topright"></div>
          </div>
        </div>
      )
    )
  }


export default LoginButton

