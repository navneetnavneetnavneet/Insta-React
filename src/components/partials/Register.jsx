import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncRegisterUser } from "../../store/actions/userActions";

const Register = () => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      fullName,
      email,
      password,
    };
    dispatch(asyncRegisterUser(newUser));
  };

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col items-center justify-center py-5 text-white">
      <div className="lg:w-1/3 flex flex-col items-center gap-5 px-6">
        <img className="w-1/2" src="../../public/logo.png" alt="" />
        <form onSubmit={registerHandler} className="w-full text-lg">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 mt-2 rounded-md border-2 border-zinc-800 bg-transparent"
          />
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 mt-2 rounded-md border-2 border-zinc-800 bg-transparent"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
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
            Make New Account
          </button>
        </form>
        <span>
          Already have an account ?{" "}
          <Link to="/login" class="text-blue-500">
            Log In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
