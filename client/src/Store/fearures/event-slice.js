import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import * as api from '../api';

export const createEvent = createAsyncThunk(
    "event/createevent",
    async({eventData,navigate,toast},{rejectWithValue})=>{
        console.log("eventdata",eventData)
      try{
        const response = await api.createEvent(eventData);
        navigate("/");
        toast("event created");
        return  response.data;
      }catch(err){
        rejectWithValue(err);
        console.log(err);
      }
    }
  )
  export const deleteEvent = createAsyncThunk(
    "event/delete",
    async(deleteID)=>{
      try{
        const response = await api.deleteEvent(deleteID);
        return  response.data;
      }catch(err){
        console.log(err.message);
      }
    }
  )
  export const addToComment = createAsyncThunk(
    "event/addToComment",
    async({value,id},{rejectWithValue})=>{
      try{
        const response = await api.addToComment(value,id);
        return  response.data;
      }catch(err){
        rejectWithValue(err);
        console.log(err.response.data);
      }
    }
  )
  export const deleteToComment = createAsyncThunk(
    "event/addToComment",
    async({value,commentPostedBy,eventId})=>{
      try{
        const response = await api.deleteToComment(value,commentPostedBy,eventId);
        return  response.data;
      }catch(err){
        console.log(err);
      }
    }
  )
  export const joinToEvent = createAsyncThunk(
    "event/joinToComment",
    async(eventId)=>{
        console.log("joinToEvent",eventId)
      try{
        const response = await api.joinToEvent(eventId);
        return  response.data;
      }catch(err){
        console.log(err);
      }
    }
  )
  export const updateToEvent = createAsyncThunk(
    "event/updateToEvent",
    async({id,name})=>{
        console.log("joinToEvent",{id,name})
      try{
        const response = await api.updateToEvent(id,name);
        return  response.data;
      }catch(err){
        console.log(err);
      }
    }
  )
  export const getEvents = createAsyncThunk(
    "getevents",
    async()=>{
      try{
       const response = await api.getEvents();
       return response.data;
      }catch(err){
        console.log(err)
      }
    }

  )

  const eventSlice = createSlice({
    name:"event",
    initialState:{
        events:[],
        error:"",
        loading:false,
    },
    reducers:{
      // addToComment:(state,action)=>{
      // state.events= action.payload;
      // },
    },
    extraReducers:{
        [createEvent.pending]:(state,action)=>{
           state.loading = true;
        },
        [createEvent.fulfilled]:(state,action)=>{
            state.loading= false;
            state.event = action.payload;
        },
        [createEvent.rejected]:(state,action)=>{
            state.loading= false;
            state.error = action.payload.message;
        },
        [getEvents.pending]: (state, action) => {
          state.loading = true;
        },
        [getEvents.fulfilled]: (state, action) => {
          state.loading = false;
          state.events = action.payload;
          
        },
        [getEvents.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
        [deleteEvent.pending]: (state, action) => {
          state.loading = true;
        },
        [deleteEvent.fulfilled]: (state, action) => {
          state.loading = false;
          state.event = action.payload;
          
        },
        [deleteEvent.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
        [addToComment.pending]: (state, action) => {
          state.loading = true;
        },
        [addToComment.fulfilled]: (state, action) => {
          state.loading = false;
          state.event = action.payload;
          
        },
        [addToComment.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
        [deleteToComment.pending]: (state, action) => {
          state.loading = true;
        },
        [deleteToComment.fulfilled]: (state, action) => {
          state.loading = false;
          state.event = action.payload;
          
        },
        [deleteToComment.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
        [joinToEvent.pending]: (state, action) => {
          state.loading = true;
        },
        [joinToEvent.fulfilled]: (state, action) => {
          state.loading = false;
          state.event = action.payload;
          
        },
        [joinToEvent.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
        [updateToEvent.pending]: (state, action) => {
          state.loading = true;
        },
        [updateToEvent.fulfilled]: (state, action) => {
          state.loading = false;
          state.event = action.payload;
          
        },
        [updateToEvent.rejected]: (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        },
    }

  })
export const event = eventSlice.actions;

export default  eventSlice;