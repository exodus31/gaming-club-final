import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './Components/Landing';
import AllEvents from './Components/AllEvents';
import './Components/Style.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Landing />}/>
          <Route path="allevents" element={<AllEvents />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
