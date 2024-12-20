import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFoundComponent } from './assets/html/NotFoundComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFoundComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
