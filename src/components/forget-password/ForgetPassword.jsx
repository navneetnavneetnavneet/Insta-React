import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncForgetPassword } from "../../store/actions/userActions";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const data = await dispatch(asyncForgetPassword(email));

      navigate(`/change-password/${data.user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen px-4 flex flex-col gap-5 items-center pt-20">
      <div className="w-32 h-32 rounded-full border flex items-center justify-center">
        <i className="text-[3rem] ri-lock-line"></i>
      </div>
      <h1 className="text-2xl font-semibold">Trouble logging in?</h1>
      <p className="text-xl text-zinc-500 text-center">
        Enter your email, phone, or username and we'll send you a link to get
        back into your account.
      </p>
      <form onSubmit={submitHandler} className="w-full">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 text-lg rounded-md border-2 border-zinc-700 outline-none bg-transparent"
        />
        <button className="w-full mt-4 px-4 py-2 text-lg text-white rounded-md bg-blue-600">
          Send login link
        </button>
      </form>
      <div className="w-full flex items-center gap-2 justify-center mt-10">
        <hr className="w-full h-[1px] bg-zinc-700" />
        <p className="text-xl font-semibold text-zinc-700">OR</p>
        <hr className="w-full h-[1px] bg-zinc-700" />
      </div>
      <Link to="/register" className="text-xl font-semibold">
        Create New Account
      </Link>
      <Link
        to="/login"
        className="w-full text-xl text-zinc-700 font-semibold py-2 border border-zinc-700 flex items-center justify-center absolute bottom-0"
      >
        Back to login
      </Link>
    </div>
  );
};

export default ForgetPassword;
