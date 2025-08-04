import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/Home/Home";
import PlansPage from "./pages/Plans";
import SummaryPage from "./pages/Summary";
import "./styles/base.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
