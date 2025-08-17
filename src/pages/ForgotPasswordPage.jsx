import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncForgotPassword } from "../store/actions/userActions";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      if (!email) {
        return toast.warning("Email is required !");
      }

      const data = await dispatch(asyncForgotPassword(email));

      if (!data) return;

      navigate(`/change-password/${data?.user?._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full md:mx-auto min-h-screen text-white px-2 md:px-4 flex flex-col gap-5 items-center pt-20">
      <div className="w-24 md:w-28 h-24 md:h-28 rounded-full border flex items-center justify-center">
        <i className="text-[3rem] ri-lock-line"></i>
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Trouble logging in?
      </h1>
      <p className="text-lg text-center opacity-60 tracking-tighter leading-tight">
        Enter your email or username and we'll send you a link to get back into
        your account.
      </p>
      <form onSubmit={submitHandler} className="w-full tracking-tighter">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Your Email"
          className="w-full px-2 py-2 text-lg rounded-md border-2 border-zinc-700 outline-none bg-transparent"
        />
        <button className="w-full mt-4 px-4 py-2 text-lg text-white rounded-md bg-sky-600 hover:bg-sky-700 dur300 cursor-pointer">
          Send login link
        </button>
      </form>
      <div className="w-full flex items-center gap-2 justify-center mt-10">
        <hr className="w-full h-[1px] bg-zinc-700" />
        <p className="text-xl font-semibold text-zinc-700">OR</p>
        <hr className="w-full h-[1px] bg-zinc-700" />
      </div>
      <Link to="/sign-up" className="text-xl font-semibold tracking-tighter">
        Create New Account
      </Link>
      <Link
        to="/sign-in"
        className="w-full tracking-tighter md:w-[50vw] lg:w-[40vw] md:mx-auto text-xl text-zinc-400 font-semibold py-2 border border-zinc-700 flex items-center justify-center absolute bottom-0"
      >
        Back to Sign In
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
