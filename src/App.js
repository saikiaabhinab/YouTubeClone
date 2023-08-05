import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  ChannelDeatil,
  Feed,
  NavBar,
  SearchFeed,
  VideoDeatil,
} from "./Components";

// import {
//   Feed,
//   SearchFeed,
//   VideoDeatil,
//   ChannelDeatil,
//   NavBar,
// } from "./Components/index.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />}></Route>
            <Route path="/video/:id" exact element={<VideoDeatil />}></Route>
            <Route
              path="/channel/:id"
              exact
              element={<ChannelDeatil />}
            ></Route>
            <Route
              path="/search/:searchTerm"
              exact
              element={<SearchFeed />}
            ></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}
// import Feed from "./Components/Feed";

export default App;
