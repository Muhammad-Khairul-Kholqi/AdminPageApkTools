import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Template/Navbar";
import Header from "./Template/Header";
import Home from './Home';

const DefaultLayout = ({ children }) => {
  return(
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Header/>
      </div>
      {children}
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
                      <Home />
                    </DefaultLayout>
                  }
              />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
