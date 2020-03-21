import React,{useState, useEffect} from "react"
import style from "./style.css"
import fire from './config/Fire'


function TabItem(props) {
    //const [checkedMsg, setcheckedMsg] = useState(props.email)
    //const [checkBox, setcheckBox] = useState(props.status)

    function tick() {
        //setcheckBox(!checkBox)
        //checkBox ? setcheckedMsg(props.email) : setcheckedMsg("")
    }

    function sendWsMessage () {
        props.ws.send( 
            JSON.stringify({
                event: 'item registration',
                user: fire.auth().currentUser.email, 
                item: props.item, 
                status: !props.status 
            })
        )
    }

    function handleClick (stat, email) {
        props.onClick(!stat, email)
        sendWsMessage();
    }

      useEffect(()=> {
        //tick()
          }, [])
    return (
        <div className="tab-item">
            <input type="checkbox" 
            id={props.item.id}
            onClick={() => handleClick(props.status, props.email)}
            defaultChecked={props.status}
            />
            <label className= "label-checkboxes" htmlFor={props.item.id}>
           <div id="tick_mark"></div>
            </label> 
            <p>{props.item.text} - ${props.item.price} <span className= "user">{props.status ? props.email : ""}</span></p>
        </div>
    )
}

export default TabItem