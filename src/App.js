import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/Fire'
import './App.css';
import Login from './Login'
import Home from './Home'


function App({ws}) {
  const [user, setUser] = useState("")
  const [onlineUsers, setOnlineUsers] = useState([])
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('refesh')
        setUser(user);
        if (!onlineUsers.includes(user.email)) {
          setOnlineUsers(onlineUsers => [...onlineUsers, user.email])
        }
        ws.send( 
          JSON.stringify({
              event: 'user login',
              email: user.email, 
          })
        )
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
          {user ? (<Home ws={ws} onlineUsers={onlineUsers} setOnlineUsers={setOnlineUsers}/>): (<Login/>)}
        </div>
             
      )
    
  }

export default App;


