import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSignInUser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const SignInPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      return toast.warning("All fileds are required !");
    }

    if (password.length < 6) {
      return toast.warning("Invalid password !");
    }

    if (password.length > 15) {
      return toast.warning("Invalid password !");
    }

    await dispatch(asyncSignInUser({ username, password }));
  };

  return (
    <section className="w-full h-screen px-2 md:px-4 py-2 flex flex-col justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <img className="w-1/2" src={logo} alt="" />
        <form
          onSubmit={submitHandler}
          className="w-full flex flex-col gap-3 font-normal tracking-tighter"
        >
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.username}
            type="text"
            placeholder="Username"
            name="username"
            className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.password}
            type="password"
            placeholder="Password"
            name="password"
            className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
          />
          <Link
            to="/forgot-password"
            className="text-end -mt-2 text-base text-sky-600"
          >
            Forgot password?
          </Link>
          <button className="w-full px-4 py-2 rounded-md border-none bg-sky-600 hover:bg-sky-700 duration-300 text-white">
            Log In
          </button>
        </form>
        <p className="text-base text-center font-thin tracking-tighter">
          Don't have an account ?{" "}
          <Link to="/sign-up" className="text-sky-600 text-base font-normal">
            Sign Up
          </Link>{" "}
        </p>
        <button className="w-full tracking-tighter px-4 py-2 rounded-md border-none bg-sky-600 hover:bg-sky-700 duration-300 text-white">
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default SignInPage;
