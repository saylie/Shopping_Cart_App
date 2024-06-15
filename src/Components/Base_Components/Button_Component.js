import React from "react";
import { Button } from "react-bootstrap";

const  ButtonComponent = (props) => {
    const handleClick = () =>{
        props.btnClick(props.id);
    }

    return(
        <div>
            <Button name={props.buttonName} variant={props.variant} onClick={handleClick}>{props.buttonText}</Button>
        </div>
    )
}

export default ButtonComponent