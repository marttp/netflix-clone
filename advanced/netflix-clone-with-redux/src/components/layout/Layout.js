/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react router dom.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import custom components.
import Home from "../home/Home";
import Login from "../login/Login";
import Loading from "../loading/Loading";
// import useSelector to get state from the store.
import { useSelector } from "react-redux";

function Layout() {
  const loading = useSelector((state) => state.loading);

  return (
    <>
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
      {loading.isLoadingShown && <Loading />}
    </>
  );
}

export default Layout;
