import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { asyncSignUpUser } from "../store/actions/userActions";

const SignUpPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const { username, email, fullName, password } = formData;

    if (!username || !email || !fullName || !password) {
      return toast.warning("All fileds are required !");
    }

    if (password.length < 6) {
      return toast.warning("Passowrd minimun 6 characters !");
    }

    if (password.length > 15) {
      return toast.warning("Passowrd maximum 15 characters !");
    }

    await dispatch(asyncSignUpUser({ username, email, fullName, password }));
    toast.success("User account is created");
  };

  return (
    <section className="w-full h-screen px-4 py-2 flex flex-col justify-center">
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
            value={formData.email}
            type="email"
            placeholder="Email"
            name="email"
            className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            value={formData.fullName}
            type="text"
            placeholder="Full name"
            name="fullName"
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
          <button className="w-full px-2 py-2 rounded-md border-none bg-sky-600 hover:bg-sky-700 duration-300 text-white">
            Make New Account
          </button>
        </form>
        <p className="text-base text-center font-thin tracking-tighter">
          Already have an account ?{" "}
          <Link to="/sign-in" className="text-sky-600 text-base font-normal">
            Log In
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
