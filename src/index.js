import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import ForgotPassword from "./containers/ForgotPassword";
import ResetPassword from "./containers/ResetPassword";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route path="/forgot_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
