import React, {createContext,useState} from "react";
import axios from 'axios';

 const AppLevelContext = createContext();
 const api = 'https://valorant-api.com/v1'

export const AppLevelProvider = ({children}) =>{

    const [agents,setAgents] = useState([])
    const [maps,setMaps] = useState([])
    const [weapons,setWeapons] = useState([])

    const fetchAgents = async () =>{
        const response = await axios.get(`${api}/agents`)
        setAgents(response.data.data);
    }




    return (
        <AppLevelContext.Provider value={{agents,maps,weapons,setAgents,setMaps,setWeapons,fetchAgents}}>{children}</AppLevelContext.Provider>
    )
}


export default AppLevelContext;