import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/Fire'
import './App.css';
import Login from './Login'
import Home from './Home'


function App({ws}) {
  const [user, setUser] = useState("")
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        //ws.send(JSON.stringify(`${user.email} connected!`))
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
          {user ? (<Home ws={ws}/>): (<Login/>)}
        </div>
             
      )
    
  }

export default App;


