import axios from "axios";
import {create} from "zustand"

export const useAuth = create((set)=>({
  currentUser: null,
  loading: false,
  isAuthenticated: false,
  error: null,
  login: async(userCredWithRole)=>{
    const {role, ...userCredObj} = userCredWithRole
    try{
      //set loading true
      set({loading: true, error:null});
      //make api call
      let res = await axios.post("http://localhost:4000/common-api/login", userCredObj, {withCredentials:true})
      //update state
      set({
        loading: false,
        isAuthenticated: true,
        error: null,
        currentUser: res.data.payload
      })
    }catch(err){
      set({
        currentUser: null,
        loading: false,
        isAuthenticated: false,
        error: err.message
      })
    }
  },
  logout: async()=>{
    try{
      //set loading state
      set({loading: true, error:null});
      //make api call
      let res = await axios.post("http://localhost:4000/common-api/logout",{}, {withCredentials:true})
      //update state
      set({
        loading: false,
        isAuthenticated: false,
        currentUser: null,
      })
      
    }catch(err){
      set({
        currentUser: null,
        loading: false,
        isAuthenticated: false,
        error: err.response?.data?.error || "Logout Failed"
      })
    }
  }
}))