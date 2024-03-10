import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./Template/Sidebar";
import Header from "./Template/Header";
import Dashboard from './Dashboard';

// about
import CategoryAbout from "./Data/About/CategoryAbout";
import DataAbout from "./Data/About/AboutUs/DataAbout";
import EditAbout from "./Data/About/AboutUs/EditAbout";

const DefaultLayout = ({ children }) => {
  return(
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="sidebar w-[60px] bg-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto bg-white p-4">
        <div className="bg-white py-[10px] rounded-lg shadow">
          <Header />
        </div>
        {/* content */}
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route
                  path = "/"
                  element={
                    <DefaultLayout>
                      <Dashboard />
                    </DefaultLayout>
                  }
              />

              {/* about */}
              <Route
                  path = "/category-about"
                  element={
                    <DefaultLayout>
                      <CategoryAbout />
                    </DefaultLayout>
                  }
              />

              <Route
                  path = "/data-about"
                  element={
                    <DefaultLayout>
                      <DataAbout />
                    </DefaultLayout>
                  }
              />

              <Route
                  path = "/edit-data-about"
                  element={
                    <DefaultLayout>
                      <EditAbout />
                    </DefaultLayout>
                  }
              />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
