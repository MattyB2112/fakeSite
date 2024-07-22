import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form className="Auth-form">
        <div className="login-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <p className="forgot-password-text">
            New shopper? Sign up{" "}
            <a href="#" className="forgot-password-link">
              here!
            </a>
          </p>
          <div className="form-group-mt-3">
            <input
              type="email"
              className="form-control-mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group-mt-3">
            <input
              type="password"
              className="form-control-mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password-text">
            Forgot{" "}
            <a href="#" className="forgot-password-link">
              password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
