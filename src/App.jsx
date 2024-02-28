import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  PythonProgramming,
  PythonProject,
  SQL,
  PowerBI,
  DataScience,
  DataAnalyst,
  SoftwareTesting,
  CSsubjects,
  CareerinTech,
} from "./page/courses";

import { 
  Form,
  Gallery,
  Home,
  JoinAsTeacherForm,
  Page404,
  TeacherProfile,
  Teachers,
} from "./page"
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
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:id" element={<TeacherProfile />} />
        <Route path="/join-as-teacher" element={user ? <Page404 /> : <JoinAsTeacherForm />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
