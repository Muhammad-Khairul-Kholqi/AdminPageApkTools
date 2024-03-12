import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./Template/Sidebar";
import Header from "./Template/Header";
import Dashboard from './Dashboard';

// about
import CategoryAbout from "./Data/About/CategoryAbout";
import DataAbout from "./Data/About/AboutUs/DataAbout";
import EditAbout from "./Data/About/AboutUs/EditAbout";

// visi misi
import DataVisiMisi from "./Data/About/VisionMision/DataVisiMisi";
import EditVisionMision from "./Data/About/VisionMision/EditVisionMision";

// contact
import DataContact from "./Data/About/Contact/DataContact";
import EditContact from "./Data/About/Contact/EditContact";

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

              {/* visi misi */}
              <Route
                  path = "/data-visi-misi"
                  element={
                    <DefaultLayout>
                      <DataVisiMisi />
                    </DefaultLayout>
                  }
              />
              <Route
                  path = "/edit-data-visi-misi"
                  element={
                    <DefaultLayout>
                      <EditVisionMision />
                    </DefaultLayout>
                  }
              />

              {/* contact */}
              <Route
                  path = "/data-contact"
                  element={
                    <DefaultLayout>
                      <DataContact />
                    </DefaultLayout>
                  }
              />
              <Route
                  path = "/edit-data-contact"
                  element={
                    <DefaultLayout>
                      <EditContact />
                    </DefaultLayout>
                  }
              />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
