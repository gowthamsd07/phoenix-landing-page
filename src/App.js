import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./Components/ScrollTop";

const Home = lazy(() => import("./Pages/Landing"));

const App = () => (
  <div>
    <Router forceRefresh={true}>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </ScrollToTop>
      </Suspense>
    </Router>
  </div>
);

export default App;
