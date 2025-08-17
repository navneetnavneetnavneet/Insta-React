import React, { useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { socketContext } from "../../context/SocketContext";
import { setMessages } from "../../store/reducers/messageSlice";

const MessageInput = () => {
  const dispatch = useDispatch();

  const [messageInput, setMessageInput] = useState("");
  const [media, setMedia] = useState("");

  const { selectedChat } = useSelector((state) => state.chatReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  const { socket } = useContext(socketContext);

  const mediaRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!selectedChat || (!messageInput && !media)) {
      return;
    }

    try {
      const { data, status } = await axios.post(
        "/messages/send-message",
        {
          chatId: selectedChat._id,
          content: messageInput,
          media: media,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data) {
        socket && socket.emit("new-message", data);
        await dispatch(setMessages([...messages, data]));
      }
    } catch (error) {
      console.log(error.response?.data);
    }

    setMessageInput("");
    setMedia("");
  };

  return (
    <div className="w-full md:w-[50vw] lg:w-[40vw] bg-black fixed bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 px-2 py-2 bg-balck">
      <form
        onSubmit={submitHandler}
        className="flex items-center gap-2 px-2 py-1 bg-white rounded-full border border-zinc-600"
      >
        <input
          onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput}
          type="text"
          placeholder="Message . . ."
          className="w-full px-2 py-2 text-lg font-medium text-black bg-transparent border-none outline-none"
        />
        <input
          onChange={(e) => setMedia(e.target.files[0])}
          ref={mediaRef}
          type="file"
          hidden={true}
        />
        <i
          onClick={() => mediaRef.current.click()}
          className="ri-attachment-line text-[1.5rem] cursor-pointer text-black"
        ></i>
        <button className="px-6 py-1 rounded-full bg-sky-600 cursor-pointer">
          <i className="ri-send-plane-fill text-[1.4rem]"></i>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
