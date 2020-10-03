import React from "react";
import "./styles.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Navbar from "./Page/Navbar";
import DetailUser from "./Page/DetailUser";
import UserNotFound from "./Page/UserNotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRouting from "./Component/ProtectedRouting";
import Login from "./Page/Login";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <ProtectedRouting path="/" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/DetailUser/:id" component={DetailUser} />
          <Route path="/UserNotFound" component={UserNotFound} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
