import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Home, Profile, Settings } from "./pages";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </Router>
  );
}

export default App;
