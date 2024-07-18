import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <form className="Auth-form">
        <div className="login-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
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
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
