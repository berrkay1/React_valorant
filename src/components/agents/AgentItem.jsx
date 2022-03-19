import React from 'react'
import styles from '../../styles/agents.css'

function AgentItem({agent}) {
  
  return (
    <div className='agentCard'>
      <div className="agentHeading">
        <h3>{agent.displayName}</h3>
        <p>{agent.description}</p>
      </div>
      <img src={agent.displayIcon} alt="caracterIcon" />
      <div className="agentInfo">
        <p className='agentRole'>{agent.role.displayName}</p>
        <p className="agentAbility">
          {agent.abilities.map((ability,idx)=>(
            <p>{ability.displayName}</p>
          ))}
        </p>
      </div>
    </div>
  )
}

export default AgentItem