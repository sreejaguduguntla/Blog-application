import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadingClass } from "../styles/common";

export default function Register() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (newUser) => {

    setLoading(true);
    setError("");

    try {

      let { role, ...userObj } = newUser;
      if (!userObj.profileImageUrl) {
        userObj.profileImageUrl = "";
      }

      let url = role === "USER" ? "http://localhost:4000/user-api/users" : "http://localhost:4000/author-api/users";

      let resObj = await axios.post(url, userObj);

      if (resObj.status === 201) {
        navigate("/login");
      }

    } catch (err) {
      console.log(err.response?.data);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // loading screen
  if (loading === true) {
    return <p className={loadingClass}>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96 flex flex-col items-center"
      >

        <h2 className="text-xl mb-4 font-semibold">Register</h2>

        {/* Role */}
        <div className="mb-4 flex items-center gap-3">
          <span>Select Role</span>

          <label>
            <input type="radio" value="USER" {...register("role", { required: "Role required" })} />
            <span className="ml-1">User</span>
          </label>

          <label>
            <input
              type="radio"
              value="AUTHOR"
              {...register("role", { required: "Role required" })}
            />
            <span className="ml-1">Author</span>
          </label>
        </div>

        <p className="text-red-500 text-sm mb-2">{errors.role?.message}</p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 mb-2">{error}</p>
        )}

        {/* First & Last Name */}
        <div className="flex gap-3 mb-1">

          <input
            type="text"
            placeholder="First Name"
            className="border p-2 w-32 bg-gray-200 rounded"
            {...register("firstName", { required: "First name required" })}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 w-32 bg-gray-200 rounded"
            {...register("lastName")}
          />

        </div>

        <p className="text-red-500 text-sm mb-2">{errors.firstName?.message}</p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-72 mb-1 bg-gray-200 rounded"
          {...register("email", { required: "Email required" })}
        />

        <p className="text-red-500 text-sm mb-2">{errors.email?.message}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-72 mb-1 bg-gray-200 rounded"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters"
            }
          })}
        />

        <p className="text-red-500 text-sm mb-2">{errors.password?.message}</p>

        {/* Optional Profile Image URL */}
        <input
          type="text"
          placeholder="Profile Image URL (optional)"
          className="border p-2 w-72 mb-3 bg-gray-200 rounded"
          {...register("profileImageUrl")}
        />

        {/* Register Button */}
        <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-600">
          Create Account
        </button>

      </form>

    </div>
  );
}