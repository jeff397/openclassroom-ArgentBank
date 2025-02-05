import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logoutSuccess } from "../../slices/loginSlice";
import { userLogout } from "../../slices/userSlice";
import logo from "../../assets/argentBankLogo.png";
import "./header.css";

function Header() {
  const firstName = useSelector((state) => state.user.firstName);
  const userName = useSelector((state) => state.user.userName);

  const displayName = userName ? userName : firstName; // Priorité à userName

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.login.isAuth);

  const handleLogout = () => {
    dispatch(logoutSuccess());
    dispatch(userLogout());
    navigate("/");
  };
  console.log("userName dans Redux:", userName);

  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          {isAuth ? (
            <div className="user-firstname">
              <i className="fa fa-user-circle"></i>&nbsp;
              <span className="firstname">{displayName}&nbsp;</span>
              <button
                onClick={handleLogout}
                className="main-nav-item logout-btn"
              >
                <i className="fa fa-sign-out"></i>&nbsp;Sign Out
              </button>
            </div>
          ) : (
            <NavLink to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>&nbsp;Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
