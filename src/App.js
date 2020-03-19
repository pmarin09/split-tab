import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/Fire'
import './App.css';
import Login from './Login'
import Home from './Home'

function App(props) {
  const [user, setUser] = useState("")

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }

  useEffect(()=> {
    authListener()
      }, [])

return(
        
        <div>
          {user ? (<Home />): (<Login/>)}
        </div>
             
      )
    
  }

export default App;


