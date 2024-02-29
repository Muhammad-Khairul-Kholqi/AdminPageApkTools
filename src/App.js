import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from "./Template/Sidebar";
import Header from "./Header";

import DataButton from "./Tools/Button/DataButton";

const DefaultLayout = ({ children }) => {
  return(
    <div className="flex h-screen">
      <div className="w-[50px]">
        <Sidebar />
      </div>
      <div className = "flex-1 overflow-y-auto bg-[#f2f2f2] p-4" >
        <div className="bg-white py-[10px] rounded-lg shadow">
          <Header />
        </div>
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
            path = "/data-button"
            element={
                <DefaultLayout>
                    <DataButton />
                </DefaultLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
