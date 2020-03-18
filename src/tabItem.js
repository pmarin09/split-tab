import React from "react"
import style from "./style.css"
function TabItem(props) {
   
    return (
        <div className="tab-item">
            <input 
            type="checkbox" 
            onClick={props.tick}
            defaultChecked={props.check}
            // checked={props.item.checked}
            />
            <h1>{props.checkedMsg}</h1>
            <p>{props.item.text} - ${props.item.price}</p>
            
        </div>
    )
}


export default TabItem