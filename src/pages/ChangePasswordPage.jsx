import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncChangePassword } from "../store/actions/userActions";
import { toast } from "react-toastify";

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.warning("Passowrd minimun 6 characters !");
    }

    if (password.length > 15) {
      return toast.warning("Passowrd maximum 15 characters !");
    }

    dispatch(asyncChangePassword(userId, password));
    navigate("/sign-in");
    toast.success("Password changed successfully");
  };

  return (
    <div className="w-full md:mx-auto text-white min-screen px-2 md:px-4 flex flex-col items-center gap-5 pt-40">
      <h1 className="text-2xl font-semibold tracking-tighter">
        Create a strong password
      </h1>
      <p className="text-lg text-center opacity-60 tracking-tighter leading-tight">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        numquam? At, ut. Fugit, doloremque eum.
      </p>
      <form onSubmit={submitHandler} className="w-full tracking-tighter">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="New Password"
          className="w-full px-2 py-2 text-lg rounded-md border border-zinc-700 outline-none bg-transparent"
        />
        <button className="w-full mt-4 px-2 py-2 text-lg text-white rounded-md bg-sky-600 hover:bg-sky-700 duration-300 cursor-pointer">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
