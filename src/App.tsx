import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Loading from "./components/Loading";
import Home from "./components/Home";
const NewDetail = React.lazy(() => import("./components/NewsDetail"));
function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <NewDetail />
        </Route>
      </React.Suspense>
    </Router>
  );
}

export default App;
