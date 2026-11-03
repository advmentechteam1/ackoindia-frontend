import React from 'react';
import { InsuranceProvider } from './context/InsuranceContext';
import Home from './pages/Home';

function App() {
  return (
    <InsuranceProvider>
      <Home />
    </InsuranceProvider>
  );
}

export default App;
