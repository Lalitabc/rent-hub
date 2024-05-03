import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import StoreContext from "../store/store";

const SignUp = () => {
  const { setIsLoggedIn } = useContext(StoreContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store sign-up data in local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('logged', true);
    setIsLoggedIn(true);
    
    // Redirect the user to home page after sign-up
    window.location.href = '/';
  };

  return (
    <body className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstNameInput">First Name</label>
        </div> 

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastNameInput">Last Name</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="emailInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="passwordInput">Password</label>
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
          {localStorage.getItem('logged') === 'true' ? (
            <Link to="/" className="btn btn-primary w-100 py-2" type="submit">
              Sign up
            </Link>
          ) : (
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign up
            </button>
          )}
          <p className="mt-5 mb-3 text-body-secondary">Already have an account? <Link to='/loginpage'>Login</Link></p>
        </div>
      </form>
    </body>
  );
};

export default SignUp;
