import React from "react";
import "../css/documentHolder.css";
import Title from "./Title"
import Form from "./Form";

export default function DocumentHolder(){
    return (
        <div className="documentHolder">
            <Title />
            <Form />
        </div>
    )
}