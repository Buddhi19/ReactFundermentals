import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Elect from './Pages/Elect';
import Mecha from './Pages/Mecha';
import Civil from './Pages/Civil';
import Manufacture from './Pages/Manufacture';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Elect" element={<Elect />} />
          <Route path="/Mecha" element={<Mecha />} />
          <Route path="/Civil" element={<Civil />} />
          <Route path="/Manu" element={<Manufacture />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
