import React,{useState, useEffect} from "react"
import style from "./style.css"
function TabItem(props) {
    const [checkedMsg, setcheckedMsg] = useState("")
    const [checkBox, setcheckBox] = useState(false)
    function tick() {
        setcheckBox(!checkBox)
        checkBox ? setcheckedMsg('HOLA') : setcheckedMsg('')
      }
      useEffect(()=> {
        tick()
          }, [])
    return (
        <div className="tab-item">
            {/* <input 
            type="checkbox"     
            id="_checkbox"
            onClick={tick}
            defaultChecked={props.check}
            // checked={props.item.checked}
            /> */}
            <input type="checkbox" 
            id={props.item.id}
            onClick={tick}
            defaultChecked={props.check}
            />
            <label for={props.item.id}>
           <div id="tick_mark"></div>
            </label> 
            <p>{props.item.text} - ${props.item.price}</p>
            <h1>{checkedMsg}</h1>
        </div>
    )
}


export default TabItem