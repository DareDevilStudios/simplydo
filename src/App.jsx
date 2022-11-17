import './App.css';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
