import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Home/Sidebar';
import Home from './components/Home/Home';
import Project from './components/Home/Project';
import Contact from './components/Home/Contact';
import Blog from './components/Home/Blog';
import ProjectDetails from './components/Home/ProjectDetails';

function App() {
  return (
    <div className="App bg-base-200">
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path='project' element={<Project />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='projectDetails/:id' element={<ProjectDetails />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
