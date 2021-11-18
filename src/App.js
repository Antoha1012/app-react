import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PostsList from "./components/PostsList/PostsList";
import Post from "./components/Post/Post";
import HeavyComponent from "./components/HeavyComponent/HeavyComponent";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/posts">
            <PostsList />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/heavycomponent">
            <HeavyComponent />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
