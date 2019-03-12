import React from 'react'

function Image(props) {
    return (
        <div>
            <img src={props.img} alt="cat fight"></img>
        </div>
    )
}

export default Image