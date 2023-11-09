
import './App.css';
import Home from './pages/Home.js'
import Detail from './pages/Detail.js'
import {StateContext} from './context/ContextState.js';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
  
} from 'react-router-dom';


function App() {
  return (
      <StateContext>

    <div className="App">
       <Router>
        
      <Routes>
        <Route  path = '/product/:title/:id'  element={<Detail />}/>
          
        
        <Route path = '/' element={<Home />} />
        
        
      </Routes>
    </Router>
    </div>
    </StateContext>
  );
}

export default App;
