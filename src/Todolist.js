import React from "react";
import Completed from "./Completed";
import FormComponent from "./FormComponent";
import Header from "./Header";

function Todolist (){

    return(
        <div>
            <Header />
            <FormComponent />
            <Completed />
        </div>
    )
}

export default Todolist;