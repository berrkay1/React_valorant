import React, { useContext } from 'react'
import AppLevelContext from '../../context/AppLeveContext'
import AgentItem from './AgentItem';
import '../../styles/agentsList.css';
function AgentList() {

  const {agents} = useContext(AppLevelContext);

  return (
   
      <div className="agentList">
        {agents.map((agent,idx) =>(
          <AgentItem agent={agent} key={idx} />
        ))}
    
      </div>
  )
}

export default AgentList