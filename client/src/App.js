
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Register from './Register';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Register/>}/>
   

    </Routes>
   
  );
}

export default App;
