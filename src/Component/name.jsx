import React from "react"
import "../style/style.css"

function Button(){
    return(
        <React.Fragment>
        <button style={{
            backgroundColor : 'red',
            color: 'white',
            padding : '4px 2px'
        }}>Save</button>
        </React.Fragment>
    )
}

function Input(){
    return(
        <React.Fragment>
            <input className="input" placeholder="ISI DLU GAIS ..."/>
        </React.Fragment>
    )
}

export {Button,Input}