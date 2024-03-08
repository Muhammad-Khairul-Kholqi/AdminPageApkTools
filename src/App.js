import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./Template/Sidebar";
import Header from "./Template/Header";
import Dashboard from './Dashboard';

const DefaultLayout = ({ children }) => {
  return(
    <div className="flex h-screen">
      {/* sidebar */}
      <div className="sidebar w-[60px] bg-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto bg-[#F0F0F0] p-4">
        <div className="bg-white py-[10px] rounded-lg shadow-md">
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
          </Routes>
      </Router>
    </div>
  );
}

export default App;
