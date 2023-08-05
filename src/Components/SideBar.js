import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constance";
// const selectedCategory = "New";
const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((categori) => {
        return (
          <button
            onClick={() => setSelectedCategory(categori.name)}
            className="category-btn"
            style={{
              background: categori.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            key={categori.name}
          >
            <span
              style={{
                color: categori.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {categori.icon}
            </span>
            <span
              style={{
                opacity: categori.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {categori.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SideBar;
