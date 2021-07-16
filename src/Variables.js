import React, { createContext } from "react";

export const SetVariables = createContext();

export default function SetVariablesProvider (props){
    const country = props.country;
    const category = props.category;
    return(
        <SetVariables.Provider value={{ country,category }}/>
    )
}