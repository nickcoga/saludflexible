// App.tsx
import { Routes, Route } from 'react-router-dom';
import Plans from './pages/Plans/Plans';
import Summary from './pages/Summary/Summary';
import FormPage from './components/Form';



function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
