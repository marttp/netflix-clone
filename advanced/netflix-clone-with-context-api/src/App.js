/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react router dom.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import global styling.
import "./index.css";
// import context provider.
import UserContext from "./context/UserContext";
// import useState.
import { useState, useEffect } from "react";

// create App components.
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* End Home Route */}
          {/* Login Route */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* End Login Route */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
// export App component.
export default App;
