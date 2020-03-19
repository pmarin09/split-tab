import React,{useState, useEffect} from "react"
import style from "./style.css"
import fire from './config/Fire'


function TabItem(props) {
    const [checkedMsg, setcheckedMsg] = useState("")
    const [checkBox, setcheckBox] = useState(false)
    
    
    function tick() {
        setcheckBox(!checkBox)
        checkBox ? setcheckedMsg(fire.auth().currentUser.email) : setcheckedMsg("")
      }
      useEffect(()=> {
        tick()
          }, [])
    return (
        <div className="tab-item">
            <input type="checkbox" 
            id={props.item.id}
            onClick={tick}
             defaultChecked={props.check}
            />
            <label className= "label-checkboxes" htmlFor={props.item.id}>
           <div id="tick_mark"></div>
            </label> 
            <p>{props.item.text} - ${props.item.price}</p>
            <>{checkedMsg}</>
        </div>
    )
}

export default TabItem