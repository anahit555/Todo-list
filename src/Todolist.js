import React from "react";
import Completed from "./Completed";
import FormComponent from "./FormComponent";
import Header from "./Header";

function TodoList() {
    return (
        <div>
            <Header />
            <FormComponent />
            <Completed />
        </div>
    )
}

export default TodoList;