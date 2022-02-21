import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/Home";
import LearnPage from "./components/pages/Learn";
import CreatePage from "./components/pages/Create";
import ConnectPage from "./components/pages/Connect";
import Membership from "./components/pages/Membership";
import NotFoundpage from "./components/Not404/Not404"; 





const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/creat" element={<CreatePage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/member" element={<Membership />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
