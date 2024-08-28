import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncGetChatUser } from "../store/actions/userActions";
import { setChatUser } from "../store/reducers/userSlice";

const ChatMessage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const [message, setMessage] = useState("");

  const { chatUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(asyncGetChatUser(userId));

    return () => dispatch(setChatUser(null));
  }, [userId]);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };

  return (
    chatUser && (
      <div className="w-full h-screen bg-white">
        <div className="w-full px-4 py-2 border-b border-zinc-600 flex items-center justify-between">
          <div className="user flex items-center gap-2">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line text-xl font-semibold"
            ></i>
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={chatUser.profileImage.url}
                alt=""
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold leading-none">
                {chatUser.fullName}
              </h4>
              <h1 className="text-lg font-semibold text-zinc-400">
                {chatUser.username}
              </h1>
            </div>
          </div>
          <div className="icons flex items-center gap-5 text-xl">
            <i className="ri-phone-line"></i>
            <i className="ri-vidicon-line"></i>
          </div>
        </div>
        <div className="conversationArea w-full h-[78vh] px-2 py-2 bg-emerald-200  overflow-y-auto overflow-x-hidden">
          <div className="incomingMessage px-4 py-2 mb-1 bg-red-300 w-fit rounded-md text-white text-lg font-semibold">
            hello incoming
          </div>
          <div className="outgoingMessage px-4 py-2 mb-1 ml-auto bg-blue-300 w-fit rounded-md text-white text-lg font-semibold">
            hello outgoing
          </div>
        </div>
        <div className="w-full mt-2 flex items-center justify-between">
          <form
            onSubmit={sendMessageHandler}
            className="w-full rounded-full px-2 flex items-center justify-between border-2 border-zinc-600"
          >
            <input
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="message . . ."
              className="w-full py-4 px-2 resize-none bg-transparent border-none outline-none text-xl font-semibold"
            />
            <button className="py-2 px-8 rounded-3xl bg-blue-500 text-2xl font-semibold text-white">
              <i className="ri-arrow-up-line"></i>
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ChatMessage;
