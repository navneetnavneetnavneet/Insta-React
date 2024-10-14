import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncEditUser } from "../../store/actions/userActions";

const EditDetails = ({ user }) => {
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [profileImage, setProfileImage] = useState(user.profileImage.url);
  const [username, setUsername] = useState(user.username);
  const [fullName, setFullName] = useState(user.fullName);
  const [bio, setBio] = useState(user.bio);

  const imageHandler = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    // if (e.target.files && e.target.files[0]) {
    //   const selectedImage = URL.createObjectURL(e.target.files[0]);
    //   setProfileImage(selectedImage);
    // }

    setProfileImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedUser = {
      profileImage,
      username,
      fullName,
      bio,
    };
    console.log(updatedUser);
    
    await dispatch(asyncEditUser(updatedUser));
    navigate("/profile");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-20">
        <div className="profileImage w-20 h-20 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={profileImage}
            alt=""
          />
        </div>
        <button onClick={imageHandler} className="text-blue-500 capitalize">
          edit picture
        </button>
      </div>
      <div className="gap-5 px-4 mt-10">
        <h3 className="text-lg font-semibold">Edit Account Details</h3>
        <hr className="opacity-30 my-3"></hr>
        <form onSubmit={submitHandler} className="w-full">
          <input
            hidden
            onChange={handleImageChange}
            ref={imageRef}
            type="file"
            placeholder="Image"
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="w-full text-lg mt-2 px-4 py-2 border boder-zinc-800 rounded-md bg-transparent"
          />
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Name"
            className="w-full text-lg mt-2 px-4 py-2 border boder-zinc-800 rounded-md bg-transparent"
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Bio"
            className="w-full text-lg mt-2 px-4 py-2 resize-none border boder-zinc-800 rounded-md bg-transparent"
          ></textarea>
          <button className="w-full text-lg mt-2 px-4 py-2 border boder-zinc-800 rounded-md bg-blue-600">
            Edit Details
          </button>
        </form>
      </div>
    </>
  );
};

export default EditDetails;
