import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Album from './Pages/Album';
import Details from './Pages/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Album />} />
        <Route exact path='/details/:id' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;