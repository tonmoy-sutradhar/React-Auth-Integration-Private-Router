import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // sign in
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR IN SIGN-IN", error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR IN GOOGLE", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 max-w-lg mx-auto rounded-2xl ">
      <div className="hero-content flex-col w-full ">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-purple-600">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
          </form>
          <p className="font-thin text-blue-500 ml-16 ">
            New to this website? Please{" "}
            <Link
              className="text-sm font-semibold text-blue-600 border-b-2 border-blue-700 ml-1"
              to="/register"
            >
              Register
            </Link>
          </p>

          <p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-ghost text-green-500 border-b-2"
            >
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
