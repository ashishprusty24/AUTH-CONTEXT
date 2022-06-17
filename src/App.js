import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import Navbar from './components/Navbar';
function App() {
const {toggleAuth,isauth,token} = useContext(AuthContext)

  return (
    <div className="App">
      <>
     <Navbar/>
    

      </>
    </div>
  );
}

export default App;
