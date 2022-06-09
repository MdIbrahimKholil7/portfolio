import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Home/Sidebar';
import Home from './components/Home/Home';
import Project from './components/Home/Project';
import Contact from './components/Home/Contact';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Sidebar/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
