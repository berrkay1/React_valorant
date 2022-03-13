
import AppLevelContext from './context/AppLeveContext';
import { useContext } from 'react';
import './styles/App.css'




function App() {

  const {name,setName} = useContext(AppLevelContext);
  
  const api = 'https://valorant-api.com/v1';

  return (
    <div>
      
    </div>
  );
}

export default App;
