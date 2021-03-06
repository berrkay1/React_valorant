
import AppLevelContext from './context/AppLeveContext';
import { useContext, useEffect } from 'react';
import './styles/App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import './styles/App.css';
// componenets
import Weapons from './pages/Weapons';
import Agents from './pages/Agents';
import Maps from './pages/Maps';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';



function App() {

  const {fetchAgents} = useContext(AppLevelContext);
  
 useEffect(()=>{
   fetchAgents();
   // eslint-disable-next-line
 },[])

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/weapons' element={<Weapons/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/maps' element={<Maps/>} />
      </Routes>
    </Router>
  );
}

export default App;
