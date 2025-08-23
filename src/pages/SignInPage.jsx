import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncGoogleAuth, asyncSignInUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@react-oauth/google";

const SignInPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    await dispatch(asyncSignInUser(data));
    toast.success("User loggin successfully");

    reset();
  };

  const handleGoogleLogin = async (credentialResponse) => {
    const token = credentialResponse.credential;
    await dispatch(asyncGoogleAuth(token));
  };

  return (
    <section className="w-full h-screen px-2 md:px-4 py-2 flex flex-col justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <img className="w-1/2" src={logo} alt="" />
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-full flex flex-col gap-3 font-normal tracking-tighter"
        >
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
              {...register("username", {
                required: true,
              })}
            />
            {errors && errors?.username?.type === "required" && (
              <small className="text-sm md:text-xs font-medium text-red-500 tracking-tighter">
                This field is required
              </small>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 15,
              })}
            />
            {errors && errors?.password?.type === "required" && (
              <small className="text-sm md:text-xs font-medium text-red-500 tracking-tighter">
                This field is required
              </small>
            )}
            {errors && errors?.password?.type === "minLength" && (
              <small className="text-sm md:text-xs font-medium text-red-500 tracking-tighter">
                Password must be at least 6 characters
              </small>
            )}
            {errors && errors?.password?.type === "maxLength" && (
              <small className="text-sm md:text-xs font-medium text-red-500 tracking-tighter">
                Password must be at most 15 characters
              </small>
            )}
          </div>
          <Link
            to="/forgot-password"
            className="text-end -mt-2 text-base text-sky-600"
          >
            Forgot password?
          </Link>
          <button className="w-full px-4 py-2 rounded-md border-none bg-sky-600 hover:bg-sky-700 duration-300 text-white">
            Log In
          </button>
        </form>
        <p className="text-base text-center font-thin tracking-tighter">
          Don't have an account ?{" "}
          <Link to="/sign-up" className="text-sky-600 text-base font-normal">
            Sign Up
          </Link>{" "}
        </p>
        <button className="w-full flex items-center justify-center">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={(error) => console.error(error)}
          />
        </button>
      </div>
    </section>
  );
};

export default SignInPage;
