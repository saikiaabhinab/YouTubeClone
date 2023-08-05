import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Button } from "@mui/material";
import { Search } from "@mui/icons-material";

import Note from "./Note";

const Searchbar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  // console.log(noteToggel, setnoteToggel);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm("");
    }
  };
  return (
    <>
      <Paper
        component="form"
        onSubmit={handelSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid red",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
          display: "flex",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search Videos"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>

      <Note></Note>
    </>
  );
};

export default Searchbar;
