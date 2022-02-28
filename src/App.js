import * as React from "react";
import { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import axios from "axios";

const RACT_APP_MAPBOX =
  "pk.eyJ1Ijoiam9yZGlyb2NhOTQiLCJhIjoiY2wwNnp0ZTZ1MDFpZTNrcDYzanhod2VnbSJ9.4qhWWAscO01UzSdinUba1Q";

//STYLED COMPONENTS:

const LabelContainer = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Label = styled.label`
  width: max-content;
  color: #00007d;
  font-size: 13px;
  border-bottom: 0.5px solid #00007d;
  margin: 3px 0;
`;
const Place = styled.h3`
  font-weight: 900;
`;
const Review = styled.p`
  font-size: 14px;
`;
const Rating = styled.div`
  color: gold;
`;

const CreatedBy = styled.span`
  font-size: 14px;
`;
const Date = styled.span`
  font-size: 14px;
`;

function App() {
  const [pins, setPins] = useState([]);

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

  return (
    <Map
      initialViewState={{
        latitude: 45,
        longitude: 16,
        zoom: 4,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={RACT_APP_MAPBOX}
    >
      {pins.map((el) => (
        <>
          <Marker longitude={el.long} latitude={el.lat} color="#00007d" />
          {/* <Popup longitude={12.492373} latitude={41.890251} anchor="left">
      <LabelContainer>
        <Label>Place</Label>
        <Place>Roman Coliseum</Place>
        <Label>Review</Label>
        <Review>It was very nice</Review>
        <Label>Rating</Label>
        <Rating>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
        </Rating>
        <Label>Information</Label>
        <CreatedBy>Created by Jordi</CreatedBy>
        <Date>1 hour Ago</Date>
      </LabelContainer>

      </Popup>
       */}
        </>
      ))}
    </Map>
  );
}

export default App;
