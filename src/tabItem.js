import React from "react"
import style from "./style.css"
function TabItem(props) {
    return (
        <div className="tab-item">
            <input 
            type="checkbox" checked={props.item.checked}
            />
            <p>{props.item.text} - ${props.item.price}</p>
        </div>
    )
}
export default TabItem