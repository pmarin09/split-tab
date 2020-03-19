import React, { useState, useEffect } from 'react';
import fire from './config/Fire';
import tabData from "./tabData"
import TabItem from "./tabItem.js"
function Home ({ws}) {
    const [itemsStatus, setItemsStatus] = useState(new Array(tabData.length).fill(false))
    const [userEmail, setUserEmail] = useState(new Array(tabData.length).fill(fire.auth().currentUser.email))

    const items = tabData.map((item, idx) => <TabItem onClick={(stat, email)=>handleClick(item.id, stat, email)} key={idx} email={userEmail[idx]} item={item} ws={ws} status={itemsStatus[idx]}/>)

    const [tabItems, SetTabItems] = useState(items)

    ws.onmessage = (ev) => {
        let newStatus = itemsStatus
        let newEmail = userEmail
        const data = JSON.parse(ev.data)
        const newItems = tabItems.map((tabItem,idx) => {
            if (data.item.id === tabItem.props.item.id) {
                newStatus[idx] = data.status
                setItemsStatus(newStatus)
                newEmail[idx] = data.user
                setUserEmail(newEmail)
                return <TabItem onClick={(stat, email)=>handleClick(tabItem.props.item.id, stat, email)} email={data.user} key={idx} item={tabItem.props.item} ws={ws} status={data.status}/>      
            } else {
                return <TabItem onClick={(stat, email)=>handleClick(tabItem.props.item.id, stat, email)} email={userEmail[idx]} key={idx} item={tabItem.props.item} ws={ws} status={itemsStatus[idx]}/>  
            }
        })
        SetTabItems(newItems)
    }

    const handleClick = (id, status, email) => {
        let newStatus = itemsStatus
        let newEmail = userEmail
        const newItems = tabItems.map((tabItem,idx) => {
            if (id === tabItem.props.item.id) {
                newStatus[idx] = status
                setItemsStatus(newStatus)
                newEmail[idx] = email
                setUserEmail(newEmail)
                return <TabItem onClick={(stat, email)=>handleClick(tabItem.props.item.id, stat, email)} email={email} key={idx} item={tabItem.props.item} ws={ws} status={status}/>      
            } else {
                return <TabItem onClick={(stat, email)=>handleClick(tabItem.props.item.id, stat, email)} email={userEmail[idx]} key={idx} item={tabItem.props.item} ws={ws} status={itemsStatus[idx]}/>  
            }
        })

        SetTabItems(newItems)
    }
   

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