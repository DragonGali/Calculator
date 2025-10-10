import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginBox from './Components/LoginBox.jsx'

function Root() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <>
      {!loggedIn && <LoginBox onLoginSuccess={() => {setLoggedIn(true)}} onClose={() => {window.close()}}/>}
      {loggedIn && <App />}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
