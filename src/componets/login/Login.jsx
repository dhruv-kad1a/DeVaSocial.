import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DeVaSocial.</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on DeVaSocial.
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" type="Email" className="loginInput" />
                <input placeholder="Password" type="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Passsword?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
