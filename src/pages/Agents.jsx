import React, { useContext, useEffect } from 'react'
import AgentList from '../components/agents/AgentList';
// context
import AppLevelContext from '../context/AppLeveContext'

function Agents() {

  const {fetchAgents} = useContext(AppLevelContext);
  useEffect(()=>{
    fetchAgents();
    // eslint-disable-next-line
  },[])
  return (
    <>
      <AgentList/>
    </>
  )
}

export default Agents