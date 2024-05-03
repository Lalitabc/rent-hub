import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import StoreContext from "../store/store";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const { setIsLoggedIn } = useContext(StoreContext);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists in local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    if (email === storedEmail && password === storedPassword) {
      setIsLoggedIn(true);
      localStorage.setItem('logged', true);
      // Redirect the user to home page after successful login
      window.location.href = '/';
    } else {
      console.log("Incorrect email or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <body className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">I don't have an account <Link to='/signuppage'>Sign Up</Link></p>
        </div>
      </form>
    </body>
  );
};

export default LoginPage;
