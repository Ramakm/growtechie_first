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
  WebDevelopment,
  CSsubjects,
  CareerinTech,
} from "./page/courses";

import { 
  Gallery,
  Home,
  Page404,
  TeacherProfile,
  Teachers,
  UserProfile,
} from "./page"
import useAuth from './hooks/useAuth.jsx';

const App = () => {
  const [user] = useAuth();

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
        <Route path='course/webdevelopment' element={<WebDevelopment />} />


        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/profile" element={user ? <UserProfile /> : <Page404 />} />
        <Route path="/teachers/:id" element={<TeacherProfile />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
