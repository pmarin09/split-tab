import React, { useState } from 'react';
import fire from './config/Fire';
import tabData from "./tabData"
import TabItem from "./tabItem.js"
function Home () {
const [logout,setLogout] = useState(false)
const tabItems = tabData.map(item => <TabItem key={item.id} item={item}/>)
function signout() {
        fire.auth().signOut();
    }

        return (
        <div>
            <div className="pricing-table">
                <div className="tab-heading"></div>
                  <div className= "tab-info">
                    {tabItems}	
                 </div>
                  <button onClick={signout}>Logout</button>			
            </div>
        </div>
            
                );

            }



export default Home;    