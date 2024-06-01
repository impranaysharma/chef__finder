import React from 'react'
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';
import LoginButton from './LoginButton';
import Signupbutton from './Signupbutton';
const Auth = () => {
  return (
    <div><Auth0Provider
    domain="dev-2dt5jooxzx4fi4oi.us.auth0.com"
    clientId="oVzpCljC02I71xNglxxLa93FKbGVhyB2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <LoginButton id="logi"/>
    <Signupbutton/>
  </Auth0Provider></div>
  )
}

export default Auth