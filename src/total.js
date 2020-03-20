import React,{useState, useEffect} from "react"
import './buttons.css';
import TabItem from "./tabItem.js"
function Total(props){
    const [tax, setTax] = useState(0);
    const [tip, setTip] = useState(0);
    useEffect(
    
        ()=>setTax((Number.parseFloat(props.subtotal)*0.07).toFixed(2)), [props.subtotal],
        ()=>setTip((Number.parseFloat(props.subtotal)*0.10).toFixed(2)), [props.subtotal]
    )
    

    return(
     <div className="grid-total-container">
         <div className="grid-item"><h4 className="total">Subtotal:${props.subtotal}</h4></div>
         <div className="grid-item"><h4 className="total">Tax:${tax}</h4></div>
         <div className="grid-tip-container"><h4 className="total">Tip:</h4>
            <div><button type="button" className="btn btn-outline-info btn-xs btn-radius">{tip}</button></div>
            <div><button type="button" className="btn btn-outline-info btn-xs btn-radius">15%</button></div>
            <div><button type="button" className="btn btn-outline-info btn-xs btn-radius">20%</button></div>
        </div>
        <div className="grid-item"><h3 className="total">Total:</h3></div>
    </div>
    )
}

export default Total;