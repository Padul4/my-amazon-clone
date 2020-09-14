import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useStateValue("");

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use and
          Sale. Please see our privaci Notice, our cookies notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
