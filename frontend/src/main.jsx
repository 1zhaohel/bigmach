import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Auth0Provider
        domain="dev-3s1oqzoonl3toxbn.us.auth0.com"
        clientId="htIXnAJe6NGaeyFoWcP31iIMDBTAtBWW"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
  </StrictMode>
);