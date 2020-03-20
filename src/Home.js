import React, { useState, useEffect } from 'react';
import fire from './config/Fire';
import tabData from "./tabData"
import TabItem from "./tabItem.js"
import './buttons.css';
import Total from "./total.js"

function Home ({ws}) {
    const [itemsStatus, setItemsStatus] = useState(new Array(tabData.length).fill(false))
    const [userEmail, setUserEmail] = useState(new Array(tabData.length).fill(fire.auth().currentUser.email))
    const items = tabData.map((item, idx) => <TabItem onClick={(stat, email)=>handleClick(item.id, stat, email)} key={idx} email={userEmail[idx]} item={item} ws={ws} status={itemsStatus[idx]}/>)
    const [tabItems, SetTabItems] = useState(items)
    const [subtotal, setSubtotal] = useState(0.00);

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
                if (status) {
                    setSubtotal(subtotal => (Number.parseFloat(subtotal) + tabItem.props.item.price).toFixed(2))
                } else {
                    setSubtotal(subtotal => (Number.parseFloat(subtotal) - tabItem.props.item.price).toFixed(2))
                }
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
            
            <div className="pricing-table">
            <button className="btn btn-danger btn-md btn-radius" onClick={signout}>Logout</button>
                <div className="tab-heading"></div>
                  <div className= "tab-info">
                    {tabItems}
                    <Total subtotal={subtotal}/>
                    <button type="button" className="btn btn-success btn-md btn-radius">Complete Order</button>
                 </div>			
            </div>
            
        </div>
            
                );

}



export default Home;    