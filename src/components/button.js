import React from 'react';

const Button = props => {
    return (
            <div className="col-10 col-md-3 m-auto">
                <button onClick={props.funcion}>{props.label}</button>
            </div>
    )
};

export default Button;