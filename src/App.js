import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Newblog from './Newblog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  
  
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/createblog' element={<Newblog />} />

          </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
