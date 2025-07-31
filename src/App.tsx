import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import FormPage from "./components/Form";
import PlansPage from "./pages/Plans";
import SummaryPage from "./pages/Summary";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
