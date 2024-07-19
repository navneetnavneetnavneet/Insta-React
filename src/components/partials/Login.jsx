import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncLoginUser } from "../../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };
    dispatch(asyncLoginUser(user));
    setUsername("");
    setPassword("");
  };

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col items-center justify-center py-5 text-white">
      <div className="flex flex-col items-center gap-5 px-6">
        <img className="w-1/2" src="../../public/logo.png" alt="" />
        <form onSubmit={submitHandler} className="w-full text-lg">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mt-2 rounded-md border-2 border-zinc-800 bg-transparent"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mt-2 rounded-md border-2 border-zinc-800 bg-transparent"
          />
          <button className="w-full px-4 py-2 mt-2 rounded-md bg-blue-600">
            Log In
          </button>
        </form>
        <Link to="/forget-password" className="text-blue-600">
          Forget Password ?
        </Link>
        <span>
          Don't have an account ?{" "}
          <Link to="/register" class="text-blue-500">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
