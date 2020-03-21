import React,{useState, useEffect} from "react"
import './buttons.css';
import TabItem from "./tabItem.js"
function Total(props){
    const [tax, setTax] = useState(0);
    let [tip, setTip] = useState(0);
    let tabTotal = (parseFloat(props.subtotal) + parseFloat(tax) + parseFloat(tip)).toFixed(2)

    useEffect(
        
        ()=>setTax((Number.parseFloat(props.subtotal)*0.07).toFixed(2)), [props.subtotal],
    )
    

    return(
     <div className="grid-tab-container">
         <div className="grid-subtotal-container">
            <div className="grid-subtotal"><h4 className="tab-data">Subtotal:</h4></div>
            <div className="grid-subtotal"><h4 className="tab-data">${props.subtotal}</h4></div>
        </div>
        <div className="grid-tax-container">
            <div className="grid-tax"><h4 className="tab-data">Tax:</h4></div>
            <div className="grid-tax"><h4 className="tab-data">${tax}</h4></div>
        </div>
            <div className="grid-tip-container"><h4 className="tab-data">Tip:</h4>
                <div className="grid-tip"><h4 className="tab-data">${tip}</h4></div>
                <div><button type="button" className="btn btn-outline-info btn-xs btn-radius" onClick={() => setTip((parseFloat(props.subtotal)*.10).toFixed(2))}>10%</button></div>
                <div><button type="button" className="btn btn-outline-info btn-xs btn-radius"onClick={() => setTip((parseFloat(props.subtotal)*.15).toFixed(2))} >15%</button></div>
                <div><button type="button" className="btn btn-outline-info btn-xs btn-radius"onClick={() => setTip((parseFloat(props.subtotal)*.20).toFixed(2))} >20%</button></div>
            </div>
        <div className="grid-total-container">
            <div className="grid-total"><h3 className="total">Total:</h3></div>
            <div className="grid-total"><h3 className="total">${tabTotal}</h3></div>
        </div>
    </div>
    )
}

export default Total;