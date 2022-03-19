import React, { useContext } from 'react'
import AppLevelContext from '../../context/AppLeveContext'
import AgentItem from './AgentItem';

function AgentList() {

  const {agents} = useContext(AppLevelContext);
console.log(agents);
  return (
    <>
        {agents.map(agent =>(
          <AgentItem item={agent}/>
        ))}
    </>
  )
}

export default AgentList