import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home.jsx';
import Gallery from './page/gallery.jsx';
import Page404 from './page/Page404.jsx';
import PythonProgramming from './page/courses/pythonprogramming.jsx';
import './App.css'
import PythonProject from './page/courses/pythonproject.jsx';
import SQL from './page/courses/sql.jsx';
import PowerBI from './page/courses/powerbi.jsx';
import DataScience from './page/courses/datascience.jsx';
import DataAnalyst from './page/courses/dataanalyts.jsx';
import SoftwareTesting from './page/courses/softwaretesting.jsx';
import CSsubjects from './page/courses/cssubjects.jsx';
import CareerinTech from './page/courses/careertech.jsx';
import Form from './page/form.jsx';
import JoinAsTeacher from "./page/joinAsTeacher.jsx"
import { auth } from './firebase/config.js';

const App = () => {
  const user = auth.currentUser;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/course/:coursename' element={<Course />} /> */}
        <Route path='/course/pythonprogramming' element={<PythonProgramming />} />
        <Route path='/course/pythonproject' element={<PythonProject />} />
        <Route path='/course/sql' element={<SQL />} />
        <Route path='/course/powerbi' element={<PowerBI />} />
        <Route path='/course/datascience' element={<DataScience />} />
        <Route path='/course/dataanalytics' element={<DataAnalyst />} />
        <Route path='/course/softwaretesting' element={<SoftwareTesting />} />
        <Route path='/course/cssubjects' element={<CSsubjects />} />
        <Route path='course/careerintech' element={<CareerinTech />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/join-as-teacher" element={user ? <Page404 /> : <JoinAsTeacher />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
