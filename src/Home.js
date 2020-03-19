import React from 'react';
import fire from './config/Fire';
import tabData from "./tabData"
import TabItem from "./tabItem.js"
function Home () {
const tabItems = tabData.map(item => <TabItem key={item.id} item={item}/>)


function signout() {
        fire.auth().signOut();
    }
        return (
        <div>
            <button className="btn btn-danger" onClick={signout}>Logout</button>
            <div className="pricing-table">
                <div className="tab-heading"></div>
                  <div className= "tab-info">
                    {tabItems}	
                 </div>			
            </div>
            
        </div>
            
                );

            }



export default Home;    