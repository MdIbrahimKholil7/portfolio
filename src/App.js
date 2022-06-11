import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Home/Sidebar';
import Home from './components/Home/Home';
import Project from './components/Home/Project';
import Contact from './components/Home/Contact';
import Blog from './components/Home/Blog';
import ProjectDetails from './components/Home/ProjectDetails';
import AboutMe from './components/Home/AboutMe';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App bg-base-200">
      <Routes>
        <Route path='/' element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path='project' element={<Project />} />
          <Route path='contact' element={<Contact />} />
          <Route path='AboutMe' element={<AboutMe />} />
          <Route path='blog' element={<Blog />} />
          <Route path='projectDetails/:id' element={<ProjectDetails />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
