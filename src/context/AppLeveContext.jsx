import React, {createContext,useState} from "react";
import axios from 'axios';

 const AppLevelContext = createContext();

export const AppLevelProvider = ({children}) =>{

    const [name,setName] = useState('berkay');
 


    return (
        <AppLevelContext.Provider value={{name,setName}}>{children}</AppLevelContext.Provider>
    )
}


export default AppLevelContext;