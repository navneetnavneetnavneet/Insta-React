import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { asyncSignUpUser } from "../store/actions/userActions";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    await dispatch(asyncSignUpUser(data));
    toast.success("User account is created");

    reset();
  };

  return (
    <section className="w-full h-screen px-4 py-2 flex flex-col justify-center">
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
              {...register("username", { required: true })}
            />
            {errors && errors?.username?.type === "required" && (
              <small className="text-sm md:text-xs font-medium text-red-500 tracking-tighter">
                This field is required
              </small>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
              {...register("email", { required: true })}
            />
            {errors && errors?.email?.type === "required" && (
              <small className="text-sm md:text-xs font-medium text-red-500 tracking-tighter">
                This field is required
              </small>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              className="w-full px-2 py-2 rounded-md outline-none border border-zinc-600 bg-transparent"
              {...register("fullName", { required: true })}
            />
            {errors && errors?.fullName?.type === "required" && (
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
          <button className="w-full px-2 py-2 rounded-md border-none bg-sky-600 hover:bg-sky-700 duration-300 text-white">
            Make New Account
          </button>
        </form>
        <p className="text-base text-center font-thin tracking-tighter">
          Already have an account ?{" "}
          <Link to="/sign-in" className="text-sky-600 text-base font-normal">
            Log In
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
