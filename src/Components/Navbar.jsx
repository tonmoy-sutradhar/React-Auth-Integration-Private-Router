import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { signOut } from "firebase/auth";

const Navbar = () => {
  // const signOutUSer = useContext(AuthContext);
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  const handleSignOUt = () => {
    signOutUser()
      .then(() => {
        console.log("SignOUT Successfully Done.");
      })
      .catch((error) => {
        console.log("ERROR in SIGNOUT", error);
      });
  };

  return (
    <div className="navbar bg-purple-600 mx-auto px-11">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold gap-2 text-white"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/orders">Orders</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-white">
          React Auth Integration & Private Route
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold gap-6 text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          {user && <NavLink to="/orders">Orders</NavLink>}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="mr-4">
              Fire🔥 {user?.email} {/*optinal chain (?.)*/}
            </span>
            <button
              onClick={handleSignOUt}
              className="font-bold text-white btn btn-primary"
            >
              SignOut
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="font-bold text-white btn btn-primary">
              SIGN IN
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
