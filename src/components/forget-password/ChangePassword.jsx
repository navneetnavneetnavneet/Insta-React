import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncChangePassword } from "../../store/actions/userActions";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(asyncChangePassword(userId, password));
    navigate("/login");
  };

  return (
    <div className="w-full min-screen px-4 flex flex-col items-center gap-5 pt-40">
      <h1 className="text-2xl font-semibold">Create a strong password</h1>
      <p className="text-lg text-zinc-700 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        numquam? At, ut. Fugit, doloremque eum.
      </p>
      <form onSubmit={submitHandler} className="w-full">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-2 text-lg rounded-md border border-zinc-700 outline-none bg-transparent"
        />
        <button className="w-full mt-4 px-4 py-2 text-lg text-white rounded-md bg-blue-600">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
