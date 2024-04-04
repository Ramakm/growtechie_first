import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/BottomNavigation.jsx";
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
  WeeklySessionRegistrations,
  UnapprovedTeachers,
} from "./page/PrivatePages";

import {
  Gallery,
  Home,
  Page404,
  TeacherProfile,
  Teachers,
  UserProfile,
  Login,
} from "./page";
import useAuth from "./hooks/useAuth.jsx";

const App = () => {
  const [user] = useAuth();
  const authors = ["palakgoyal0304@gmail.com", "itsramakrushna@gmail.com"];

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && <Route path="/login" element={<Login />} />}
        {/* <Route path='/course/:coursename' element={<Course />} /> */}
        <Route
          path="/course/pythonprogramming"
          element={<PythonProgramming />}
        />
        <Route path="/course/pythonproject" element={<PythonProject />} />
        <Route path="/course/sql" element={<SQL />} />
        <Route path="/course/powerbi" element={<PowerBI />} />
        <Route path="/course/datascience" element={<DataScience />} />
        <Route path="/course/dataanalytics" element={<DataAnalyst />} />
        <Route path="/course/softwaretesting" element={<SoftwareTesting />} />
        <Route path="/course/cssubjects" element={<CSsubjects />} />
        <Route path="course/careerintech" element={<CareerinTech />} />
        <Route path="course/webdevelopment" element={<WebDevelopment />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/profile" element={user ? <UserProfile /> : <Page404 />} />
        <Route path="/teachers/:id" element={<TeacherProfile />} />
        <Route path="/*" element={<Page404 />} />
        {authors.includes(user?.email) && (
          <>
            <Route
              path="/weekly-session-registrations"
              element={<WeeklySessionRegistrations />}
            />
            <Route
              path="/unapproved-teachers"
              element={<UnapprovedTeachers />}
            />
          </>
        )}
      </Routes>
      <BottomNav />
    </>
  );
};

export default App;
