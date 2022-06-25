import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
      isAuthenticated && (
        <div class="container-name"> 
          <a class="example_e" href="#"   onClick={() => logout()}><span>Logout</span></a>
        </div>
      )
    )
  }

export default LogoutButton