import React, { Suspense, lazy } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
const HomePage = lazy(() => import("./pages/HomePage"));
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="my-3 mx-3">Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cart" component={CartPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}
