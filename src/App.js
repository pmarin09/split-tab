import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tabData from "./tabData"
import TabItem from "./tabItem.js"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './App.css';


function App() {
  const tabItems = tabData.map(item => <TabItem key={item.id} item={item}/>)
  
return(
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


