import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import * as api from '../api';
import Cookies from 'js-cookie'

// https://us06web.zoom.us/j/84973590390

export const login = createAsyncThunk(
  "auth/login",
  async({loginDetails,navigate},{rejectWithValue})=>{
    try{
      const response = await api.loginIn(loginDetails);
      navigate("/");
      return  response.data;
    }catch(err){
      return rejectWithValue(err)
    }
  }
)

export const register=createAsyncThunk(
  "auth/register",
  async({initialValues,navigate})=>{
    try{
      console.log("values",initialValues)
    const response = await api.register(initialValues);
    navigate('/')
    return response.data;
    }catch(err){
      console.log(err);
    }
  }
)

export const googleLogin=createAsyncThunk(
  "auth/google",
  async({result,navigate})=>{
    try{
      console.log("values",result)
    const response = await api.googleLogin(result);
    navigate('/')
    return response.data;
    }catch(err){
      console.log(err);
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    user:null,
    error:"",
    loading:false,

   },
  reducers: {
    login(state,action) {
      state.user = action.payload;
    },
    logout(state,action) {
      localStorage.clear();
      state.user=null;
    },
  },
  extraReducers:{
    [login.pending]:(state,action)=>{
      state.loding= true;
    },
    [login.fulfilled]:(state,action)=>{
      state.loding = false;
      state.user= action.payload;
      localStorage.setItem("user",JSON.stringify({...action.payload}));
      Cookies.set('access_token',state.user.token );
      // console.log(Cookies.get("access_token"))

    },
    [login.rejected]:(state,action)=>{
      state.error = action.payload.message;
    },
    [register.pending]:(state,action)=>{
      state.loding= true;
    },
    [register.fulfilled]:(state,action)=>{
      state.loding = false;
      localStorage.setItem("user",JSON.stringify({...action.payload}));
      state.user= action.payload;
    },
    [register.rejected]:(state,action)=>{
      state.error = action.payload.message;
    },
    [googleLogin.pending]:(state,action)=>{
      state.loding= true;
    },
    [googleLogin.fulfilled]:(state,action)=>{
      state.loding = false;
      localStorage.setItem("user",JSON.stringify({...action.payload}));
      state.user= action.payload;
    },
    [googleLogin.rejected]:(state,action)=>{
      state.error = action.payload.message;
    }
  }
});

export const {logout} = authSlice.actions;
export default authSlice;
