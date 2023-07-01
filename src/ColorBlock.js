import React from "react"

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style = {{
            backgroundColor: props.color,
            height: "50px",
            }}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock