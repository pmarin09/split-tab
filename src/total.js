import React,{useState, useEffect} from "react"
import './buttons.css';
import TabItem from "./tabItem.js"
function Total(props){
    const [tax, setTax] = useState(0);
    let [tip, setTip] = useState(0);
    let tabtot = (parseFloat(props.subtotal) + parseFloat(tax) + parseFloat(tip)).toFixed(2)

    useEffect(
        
        ()=>setTax((Number.parseFloat(props.subtotal)*0.07).toFixed(2)), [props.subtotal],
    )
    
    // function tipCalc(){
    //    tip = ((parseFloat(props.subtotal)*.10))
    //     console.log(tip)
    // }
      
    

    return(
     <div className="grid-total-container">
         <div className="grid-item"><h4 className="total">Subtotal:${props.subtotal}</h4></div>
         <div className="grid-item"><h4 className="total">Tax:${tax}</h4></div>
         <div className="grid-tip-container"><h4 className="total">Tip: ${tip}</h4>
            <div><button type="button" className="btn btn-outline-info btn-xs btn-radius">10%</button></div>
            <div><button type="button" className="btn btn-outline-info btn-xs btn-radius" >15%</button></div>
            <div><button type="button" className="btn btn-outline-info btn-xs btn-radius" >20%</button></div>
        </div>
        <div className="grid-item"><h3 className="total">Total:${tabtot}</h3></div>
    </div>
    )
}

export default Total;