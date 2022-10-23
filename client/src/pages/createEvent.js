import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { createEvent } from "../Store/fearures/event-slice";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [numberOfPlayer, setNumberOfPlayer] = useState("");
    let navigate = useNavigate();
    let dispatch = useDispatch();

// const {events} =useSelector((state)=>(state.event));
// console.log("events",events)
    
// useEffect(()=>{
//   dispatch(getEvents());
// },[])

  const submit = async (e) => {
    e.preventDefault();
      const eventData = {
        name:name,
        description:description,
        city:city,
        numberOfPlayer:numberOfPlayer,
        postedBy: `${id?._id}`,
      };
      dispatch(createEvent({eventData},navigate,toast));
      navigate("/");
      toast.success('Event created successfully');

    }
  
  let id = JSON.parse(localStorage.getItem("user"))?.details;

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get("/get");
//       const cityres = await axios.get("/getcity");
//       // const res1 = await axios.get(`/profileuser/${id._id}`);
//       // setData(res1?.data);
//       setCityRes(cityres.data);
//       setSports(res.data);
//     };
//     fetchData();
//   }, []);


  return (
    <div>
      <form method="POST">
        {/* <select value={name} onChange={(e) => setName(e.target.value)}>
          {sports.map((item, index) => (
            <option key={index}>{item.sport}</option>
          ))}
        </select> */}
        <input
          type="name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        ></input>
         <input
          type="description"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        ></input>
         <input
          type="city"
          value={city}
          name="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="city"
        ></input>
         <input
          type="number"
          value={numberOfPlayer}
          name="numberOfPlayer"
          onChange={(e) => setNumberOfPlayer(e.target.value)}
          placeholder="numberOfPlayer"
        ></input>
        {/* <select value={city} onChange={(e) => setCity(e.target.value)}>
          {cityRes.map((item, index) => (
            <option key={index}>{item.city}</option>
          ))}
        </select> */}
        <button type="submit" onClick={submit}>
          Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
