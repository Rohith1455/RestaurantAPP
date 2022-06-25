import logo from './logo.svg';
import './App.css';
import { Container, Typography } from "@material-ui/core";
import Order from "./components/Order";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from '@auth0/auth0-react';



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
  
  
  <div>
    <Container >
    <div className='title'>
    <h3>
        ONLINE FOOD DELIVERY APP
        <p> Taste that best, its on time !!</p>
    </h3>
    </div>
    
    <LoginButton />
    <LogoutButton />
    
    
    <Order />
  </Container></div>
    
   
  );
}

export default App;
