import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Account from "../Components/Account";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Testride from "../Components/Book";
import { LoginConsumer } from "../context/loginContext";

export const router = (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand text-primary" to="/">
        VACCINE
      </Link>
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            <LoginConsumer>
              {(loginInfo) => {
                if (loginInfo.login) {
                  return (
                    <>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/Book a Test Ride">
                          Book Your Vaccine
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/Booking Details">
                          Accounts
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link
                          className="nav-link"
                          to="/Booking Details"
                          onClick={() => {
                            loginInfo.logout();
                            window.location.pathname = "/Login";
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <li className="nav-item active">
                      <Link className="nav-link" to="/Login">
                        Login
                      </Link>
                    </li>
                  );
                }
              }}
            </LoginConsumer>
          }
        </ul>
      </div>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Book a Test Ride" component={Testride} />
      <Route path="/Booking Details" component={Account} />
    </Switch>
  </BrowserRouter>
);