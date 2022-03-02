import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import StarIcon from "@mui/icons-material/Star";
import RoomIcon from "@mui/icons-material/Room";
import "./app.css";
import axios from "axios";
import { format } from "timeago.js";

const RACT_APP_MAPBOX =
  "pk.eyJ1Ijoiam9yZGlyb2NhOTQiLCJhIjoiY2wwNnp0ZTZ1MDFpZTNrcDYzanhod2VnbSJ9.4qhWWAscO01UzSdinUba1Q";

const App = () => {
  //with previous versions would have viewport, (not needed with initialViewState)
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const currentUser = "jordi";

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };

  const handleAddClick = (e) => {
    setNewPlace({
      lat: e.lngLat.lat,
      long: e.lngLat.lng,
    });
  };

  return (
    <Map
      initialViewState={{
        latitude: 46,
        longitude: 15,
        zoom: 4,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      //viewport not needed because we are using the new version of Map
      mapboxAccessToken={RACT_APP_MAPBOX}
      onDblClick={handleAddClick}
    >
      {pins.map((p) => (
        <>
          <Marker longitude={p.long} latitude={p.lat} anchor="left">
            <RoomIcon
              style={{
                fontSize: 30,
                color: p.username === currentUser ? "red" : "darkblue",
                cursor: "pointer",
              }}
              onClick={() => handleMarkerClick(p._id)}
            />
          </Marker>

          {p._id === currentPlaceId && (
            <Popup
              longitude={p.long}
              latitude={p.lat}
              anchor="left"
              closeButton={true}
              closeOnClick={false}
              onClose={() => setCurrentPlaceId(null)}
            >
              <div className="card">
                <label>Place</label>
                <h4 className="place">{p.title}</h4>
                <label>Review</label>
                <p className="desc">{p.desc}</p>
                <label>Rating</label>
                <div className="stars">
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                </div>
                <label>Information</label>
                <span className="username">Created by {p.username}</span>
                <span className="date">{format(p.createdAt)}</span>
              </div>
            </Popup>
          )}
        </>
      ))}
      {newPlace && (
        <Popup
          longitude={newPlace.long}
          latitude={newPlace.lat}
          anchor="left"
          closeButton={true}
          closeOnClick={false}
          onClose={() => setNewPlace(null)}
        >
          <div>
            <form>
              <label>Title</label>
              <input placeholder="Where are you?"></input>
              <label>Review</label>
              <textarea placeholder="How was it?"></textarea>
              <label>Rating</label>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <button className="submitButton" type="submit">
                {" "}
                Add Pin
              </button>
            </form>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default App;
