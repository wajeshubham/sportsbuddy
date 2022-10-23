import React, { useState, useEffect } from "react";
// import {Logout} from ".";
import {
  addSport,
  getSport,
  deleteSport,
  updateSport,
  addCity,
  updateCity,
  deleteCity,
  getCity,
  getArea,
  addArea,
  updateArea,
  deleteArea
} from "../../Store/fearures/admin-slice";
import { useDispatch, useSelector } from "react-redux";

const CreateSport = () => {
  const [sport, setSport] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const data = useSelector((state) => state.admin);
  console.log("admijn", data);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSport());
    dispatch(getCity());
    dispatch(getArea());
  }, []);

  const addToSport = async (e) => {
    e.preventDefault();
    dispatch(addSport(sport));
    dispatch(getSport());
  };

  const deleteToSport = async (id) => {
    dispatch(deleteSport(id));
    dispatch(getSport());
  };

  const updateToSport = async (id) => {
    const sport = prompt("enter updated sport");
    dispatch(updateSport({ id, sport }));
    dispatch(getSport());
  };

  const addToCity = async (e) => {
    e.preventDefault();
    dispatch(addCity(city));
    dispatch(getCity());
  };

  const deleteToCity = async (id) => {
    dispatch(deleteCity(id));
    dispatch(getCity());

  };

  const updateToCity = async (id) => {
    const city = prompt("enter updated city");
   dispatch(updateCity({id,city}));
   dispatch(getCity());

  };

  const addToArea = async (e) => {
    e.preventDefault();
    dispatch(addArea(area));
    dispatch(getArea());

  };

  const deleteToArea = async (id) => {
    dispatch(deleteArea(id));
    dispatch(getArea());

  };

  const updateToArea = async (id) => {
    const area = prompt("enter updated area");
    dispatch(updateArea({id,area}));
    dispatch(getArea());

  };

  return (
    <div>
      {/* <Logout /> */}
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {data?.sports?.map((item, index) => (
            <div>
              {console.log("dfhgj", item?.sport)}
              <option key={index}>{item.sport}</option>
              <button onClick={() => deleteToSport(item._id)}>
                Delete Sport
              </button>
              <button onClick={() => updateToSport(item._id)}>
                Update Sport
              </button>
            </div>
          ))}
        </div>
        <br />
        <form method="POST">
          <input
            type="text"
            value={sport}
            name="sport"
            onChange={(e) => setSport(e.target.value)}
            placeholder="sport"
          ></input>
          <button onClick={addToSport}>Add Sport</button>
        </form>
      </div>
      <br />
      <br />
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {data.cities?.map((item, index) => (
            <div>
              <option key={index}>{item.city}</option>
              <button onClick={() => updateToCity(item._id)}>Update city</button>
              <button onClick={() => deleteToCity(item._id)}>Delete city</button>
            </div>
          ))}
          <br />
        </div>
        <br />
        <form method="POST">
          <input
            type="city"
            value={city}
            name="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="city"
          ></input>
          <button onClick={addToCity}>add city</button>
        </form>
      </div>
      <br />
      <br />
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {data?.areaes?.map((item, index) => (
            <div key={index}>
              <h3>{item.area}</h3>
              <button onClick={() => updateToArea(item._id)}>Update area</button>
              <button onClick={() => deleteToArea(item._id)}>Delete area</button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <form method="POST">
        <input
          type="area"
          value={area}
          name="area"
          onChange={(e) => setArea(e.target.value)}
          placeholder="area"
        ></input>
        <button type="submit" onClick={addToArea}>
          Add Area
        </button>
      </form>
    </div>
  );
};

export default CreateSport;
