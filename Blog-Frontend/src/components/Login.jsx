import { useForm } from "react-hook-form";
import {useAuth} from "../store/authStore"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {toast} from "react-hot-toast"
export default function Login(){

  const {register,handleSubmit,formState:{errors}} = useForm();
  const Navigate = useNavigate() //why?
  const login = useAuth(state=>state.login)
  const currentUser = useAuth(state=>state.currentUser)
  const isAuthenticated = useAuth(state=>state.isAuthenticated)
  const onSubmit= async(userCredObj)=>{
    await login(userCredObj)
    console.log("isAuthenticated ", isAuthenticated)
 }
 useEffect(()=>{
  if(isAuthenticated && currentUser){
    if(currentUser.role === "USER"){
      Navigate('/userprofile')
    }
    else if(currentUser.role === "AUTHOR"){
      Navigate('/authorprofile')
    }
  }
 },[isAuthenticated, currentUser, Navigate])
 return(

  <div className="bg-gray-100 min-h-screen flex justify-center items-center">

   <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white p-8 rounded shadow-md w-96 flex flex-col items-center"
   >

    <h2 className="text-xl mb-4 font-semibold">Login</h2>

    <p className="text-red-500 text-sm mb-2">{errors.role?.message}</p>

    {/* Email */}
    <input
     type="email"
     placeholder="Email"
     className="border p-2 w-72 mb-1 bg-gray-200 rounded"
     {...register("email",{required:"Email is required"})}
    />

    <p className="text-red-500 text-sm mb-2">{errors.email?.message}</p>

    {/* Password */}
    <input
     type="password"
     placeholder="Password"
     className="border p-2 w-72 mb-1 bg-gray-200 rounded"
     {...register("password",{required:"Password required",minLength:{value:6,message:"Minimum 6 characters"}})}
    />

    <p className="text-red-500 text-sm mb-3">{errors.password?.message}</p>

    {/* Button */}
    <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-600">
     Login
    </button>

   </form>

  </div>
 )
}