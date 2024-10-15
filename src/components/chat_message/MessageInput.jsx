import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSendMessage } from "../../store/actions/messageActions";
import { setMessages } from "../../store/reducers/messageSlice";
import { SocketContext } from "../../context/SocketContext";

const MessageInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [media, setMedia] = useState("");

  const { chatUser, user } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  const { socket } = useContext(SocketContext);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    if (chatUser?._id) {
      dispatch(asyncSendMessage(chatUser._id, { message, media }));
      setMessage("");
      setMedia("");
    }
  };

  const fileRef = useRef();
  const handleFile = () => {
    fileRef.current.click();
  };

  useEffect(() => {
    if (socket) {
      const handleNewMessage = (newMessage) => {
        const updatedMessages = [...messages, newMessage];
        dispatch(setMessages(updatedMessages));
      };

      socket.on("newMessage", handleNewMessage);

      return () => {
        socket.off("newMessage", handleNewMessage);
      };
    }
  }, [messages, socket, dispatch]);

  return (
    <div className="w-full mt-2 flex text-white items-center justify-between px-2">
      <form
        onSubmit={sendMessageHandler}
        className="w-full px-2 rounded-full flex items-center justify-between border-2 border-zinc-600"
      >
        <input
          onChange={(e) => setMedia(e.target.files[0])}
          ref={fileRef}
          hidden={true}
          type="file"
        />
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="message . . ."
          className="w-full py-4 px-2 resize-none bg-transparent border-none outline-none text-xl font-normal"
        />
        <div
          onClick={handleFile}
          className="px-3 py-2 cursor-pointer bg-zinc-700 flex items-center justify-center rounded-full mr-1"
        >
          <i className="ri-image-line text-2xl"></i>
        </div>
        <button
          disabled={!message && !media ? true : false}
          className="disabled:opacity-50 py-2 px-6 rounded-full bg-blue-500 text-2xl font-semibold text-white"
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
