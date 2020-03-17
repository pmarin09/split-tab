import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tabData from "./tabData"
import TabItem from "./tabItem.js"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './App.css';


firebase.initializeApp({
  apiKey: "AIzaSyAYzeOmKOk5adpLs9VF4CkpSFK-wZTESac",
  authDomain: "splittab-fb51c.firebaseapp.com"
})

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const tabItems = tabData.map(item => <TabItem key={item.id} item={item}/>)
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }
  console.log(firebase)
  //useEffect(()=> {

    // firebase.auth().onAuthStateChanged( (user) =>  
    //   setIsSignedIn([!!isSignedIn])
     // console.log(true)
    // )
  //}, [])

  function signOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
return(
      // <div className="tab-list">
      //   <h1 className = "title">Welcome to SplitTab</h1>
        
      //    {isSignedIn ? (
      //     <span>
      //       <button onClick={signOut}>Sign out!</button>
      //       <h1>Hi {firebase.auth().currentUser}</h1>
      //       {tabItems}
      //     </span>
      //   ) : (
      //     <StyledFirebaseAuth
      //       uiConfig={uiConfig}
      //       firebaseAuth={firebase.auth()}
      //     />)   
      //   }
      //   </div>
        <div>
            <div className="pricing-table">
            <div className="tab-heading"></div>
            
            <div className= "tab-info">
            {tabItems}	
              </div>		
                	
          </div>
        </div>     
      )
    
  }

export default App;
