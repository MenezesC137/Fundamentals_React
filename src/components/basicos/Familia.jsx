import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props =>{

    return (
        <div>
            <FamiliaMembro nome="Pedro " sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="José"  {...props}/>
            <FamiliaMembro nome="Maria"  sobrenome="Silva"/>
        </div>
    )
}