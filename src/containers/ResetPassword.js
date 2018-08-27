import React, { Component } from "react";
import fire from "../config/config";
import "./css/login.css";
export default class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: ""
    };

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const mode = params.get("mode");
    const oobCode = params.get("oobCode");
    const apiKey = params.get("apiKey");
    const lang = params.get("lang");

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const user = fire.auth().currentUser;
    var newPassword = this.state.newPassword;

    user
      .updatePassword(newPassword)
      .then(function() {
        // Update successful.
        console.log("password reset");
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
        <div className="form-container">
          <div className="input-group input-group-lg form-group">
            <input
              type="password"
              name="password"
              value={this.state.newPassword}
              onChange={e => this.setState({ password: e.target.value })}
              className="form-control"
              placeholder="Password"
              aria-describedby="sizing-addon1"
            />
          </div>
          <button
            type="button"
            onClick={this.onSubmit}
            className="btn btn-success"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
