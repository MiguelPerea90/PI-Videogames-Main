import React from "react";

const Platforms = (props) => {
    console.log("props", props)
    return (
        <div>
            <p>Platforms: {props.name}</p>
        </div>
    )
}

export default Platforms;