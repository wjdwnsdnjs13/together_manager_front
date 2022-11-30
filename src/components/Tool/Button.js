import React from 'react';

import './Button.css';

function Button(props) {

    return (
        <button className='button-style' style={props.btnStyle}>
            <span style={props.spanStyle}>
                {props.btnName}
            </span>
        </button>
    )

}

export default Button;