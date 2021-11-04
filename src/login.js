import React from "react";
import { connect } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "./authActions";
import "./register.css";

const Login = (props) => {
  if (!props.auth.isLoaded) return null;

  if (props.auth.uid) props.history.push("/ ");
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.loginWithEmail(email, password);
  };

  return (
    <div className="ty">
      <form onSubmit={handleSubmit} className="form-design">
        <div>
          <h1 className="form-design">LOGIN</h1>

          <label>Email</label>
          <input name="email" type="email" placeholder="email" />
        </div>

        <br />

        <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="password" />
        </div>

        <hr />

        <button type="submit">Login</button>

        <hr />

        <button onClick={props.loginWithGoogle}>
          <img
            src="https://www.citypng.com/public/uploads/preview/-11596996178apaxd1pez2.png"
            width="100"
            alt="google button"
          />
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = {
  loginWithEmail,
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
