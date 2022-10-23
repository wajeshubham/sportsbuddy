import axios from 'axios';
const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("user"))?.token
      }`;
    }
    return req;
  });

export const loginIn = (loginDetails)=> API.post('/login',loginDetails)
export const register = (initialValues)=> API.post('/register',initialValues)
export const googleLogin = (result)=> API.post('/google-login',result)
export const createEvent = (eventData)=> API.post('/event',eventData)
export const deleteEvent = (deleteId)=> API.delete(`/${deleteId}`)
export const getEvents = ()=> API.get('/find')
export const addToComment = (value,id)=> API.put('/add_comment',{value,id})
export const deleteToComment = (value,commentPostedBy,eventId)=> API.put('/delete_comment',{value,commentPostedBy,eventId})
export const joinToEvent = (eventId)=> API.put("/join_event",{eventId})
export const updateToEvent = (id,name)=> API.put(`/${id}`,{name:name})
export const getProfile = (userId)=>API.get(`/profileuser/${userId}`)
export const registerProfile = (profileData)=>API.post("/profileuser",profileData)
export const addSport = (sportData)=>API.post("/createsport",{sport:sportData})
export const getSport = ()=>API.get("/get")
export const getCity = ()=>API.get("/getcity")
export const getArea = ()=>API.get("/get-area")
export const updateSport = (id,sport)=> API.put(`/updatesport/${id}`,{sport:sport})
export const deleteSport = (id)=> API.delete(`/delete/${id}`)
export const addCity = (city)=>API.post("/city",{city:city})
export const updateCity = (id,city)=> API.put(`/updatecity/${id}`,{city:city})
export const deleteCity = (id)=> API.delete(`/deletecity/${id}`)
export const addArea = (area)=>API.post("/area",{area:area})
export const updateArea= (id,area)=> API.put(`/update-area/${id}`,{area:area})
export const deleteArea = (id,)=> API.delete(`/delete-area/${id}`)



