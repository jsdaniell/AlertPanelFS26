import React from "react"

export default function LabelWithInput({ label = "" }){
    return (
      <React.Fragment>
        <p>{label}</p>
        <input className="h-10 bg-transparent rounded-lg border-2 border-white" />        
      </React.Fragment>
    )
}