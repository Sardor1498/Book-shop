import React from "react"

const CustomImage = (props) => {
    return (
        <img src={props.image ? props.image : null}
            className={props.class} />
    )
}

export default CustomImage;