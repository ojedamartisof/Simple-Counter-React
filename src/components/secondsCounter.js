import React from "react";
import Clock from './clock';
import Button from './button'

const SecondsCounter = props => {
    return (
        <div className="">
            <div className="container d-flex justify-content-center flex-wrap">
                <div className="col-12  col-md-1">
                    <Clock />
                </div>
                <div className="col-12 col-md-5">
                    <span id="n1">{props.n1}</span>
                    <span id="n2">{props.n2}</span>
                    <span className="espaciador">:</span>
                    <span id="n3">{props.n3}</span>
                    <span id="n4">{props.n4}</span>
                    <span className="espaciador">:</span>
                    <span id="n5">{props.n5}</span>
                    <span id="n6">{props.n6}</span>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="row mr-5 pr-5">
                    <Button label="Pause" funcion={props.pausador} />
                    <Button label="Resume" funcion={props.resume} />
                    <Button label="Reset" funcion={props.reset} />
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;