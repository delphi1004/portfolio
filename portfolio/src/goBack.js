import React from "react"
import "./goBack.css"
import { BrowserRouter as Router, Route, Link , NavLink } from "react-router-dom";


function GoBack(props){

   // console.log("props.opacity "+props.opacity);

    return(

        <div className = "goBack">
            <NavLink style = {{opacity : props.opacity, textAlign : 'left'}}  to="/"  onClick ={()=> props.parent.handler(10)} >/Home</NavLink><br/>
        </div>
    )
}



export default GoBack;