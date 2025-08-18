import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { toast } from "react-toastify";
import { asyncEditUserProfile } from "../store/actions/userActions";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const imageRef = useRef();

  const [formData, setFormData] = useState({
    fullName: user && user.fullName,
    email: user && user.email,
    profileImage: user && user.profileImage.url,
    bio: user && user.bio,
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const { fullName, email, bio, profileImage } = formData;

    if (!fullName || !email) {
      return toast.warning("Full name or Email required.");
    }

    await dispatch(
      asyncEditUserProfile({ fullName, email, bio, profileImage })
    );
    toast.success("User profile is updated.");
    navigate("/profile");
  };

  return user ? (
    <section className="w-full h-screen">
      <div className="w-full px-2 md:px-4 py-2 flex items-center justify-between border-b border-zinc-600">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-[1.5rem] cursor-pointer"
        ></i>
        <h3 className="text-lg md:text-xl font-medium tracking-tighter">
          Edit Profile
        </h3>
        <Link to="/profile" className="flex items-center gap-1 cursor-pointer">
          <i className="ri-user-line text-[1.2rem]"></i>
          <h4 className="text-sm font-medium tracking-tighter">Profile</h4>
        </Link>
      </div>
      <div className="pt-10 px-2 md:px-4 flex flex-col items-center gap-10">
        <div className="relative w-24 md:w-28 h-24 md:h-28 flex items-center justify-center rounded-full border border-zinc-600">
          <img
            className="w-full h-full rounded-full object-cover"
            src={user.profileImage.url}
            alt=""
          />
          <div
            onClick={() => imageRef.current.click()}
            className="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center absolute bottom-0 left-0 bg-zinc-700"
          >
            <i className="ri-pencil-line text-[1.2rem]"></i>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-xl font-normal tracking-tighter">
            Edit Account Details
          </h2>
          <div className="w-full h-[1px] bg-zinc-600"></div>
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col gap-3 text-base font-normal tracking-tighter"
          >
            <input
              ref={imageRef}
              hidden={true}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.files[0] })
              }
              accept="image/*"
              name="profileImage"
              type="file"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              value={formData.fullName}
              type="text"
              placeholder="Full name"
              name="fullName"
              className="w-full px-2 py-2 rounded-md text-base font-normal outline-none bg-transparent border border-zinc-600"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              value={formData.email}
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-2 py-2 rounded-md text-base font-normal outline-none bg-transparent border border-zinc-600"
            />
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              value={formData.bio}
              placeholder="Bio"
              name="bio"
              className="w-full px-2 py-2 h-20 resize-none rounded-md text-base font-normal outline-none bg-transparent border border-zinc-600"
            ></textarea>
            <button className="w-full px-2 py-2 rounded-md border-none bg-sky-600 hover:bg-sky-700 text-white">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </section>
  ) : (
    <LoadingPage />
  );
};

export default EditProfilePage;
