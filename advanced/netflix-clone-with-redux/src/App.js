/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import custom components.
import Layout from './components/layout/Layout';
// import global styling.
import "./index.css";
// import provicer.
import { Provider } from "react-redux";
// import store.
import store from "./store";
// create App components.
function App() {
  return <Provider store={store}>
    <Layout />
  </Provider>;
}
// export App component.
export default App;
