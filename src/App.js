import React from "react";
import Aboutmepage from "./Aboutmepage";
import SimpleBackend from "./SimpleBackend";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

const App = () => {
  return (
    
      <BrowserRouter>
        
          <Routes>
            <Route
               exact
               path='/'
               element={<SimpleBackend/>}
            />
            <Route
               exact
               path='/aboutme'
               element={<Aboutmepage/>}
            />
            
          </Routes>
        
      </BrowserRouter>
  );
  
};

export default App;






