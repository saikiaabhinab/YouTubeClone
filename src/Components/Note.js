import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextareaAutosize } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";
// import { id } from "./VidioDeatail";

const Note = () => {
  const [open, setOpen] = useState(false);
  //   const [NoteData, setNoteData] = useState("");
  const [value, setvalue] = useState("");

  let { id } = useParams();

  console.log("this is id", id);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSave = () => {
    localStorage.setItem(`${id}`, `${value}`);
    setOpen(false);
  };

  useEffect(() => {
    let SaveData = localStorage.getItem(`${id}`);

    console.log("get value", SaveData);

    setvalue(SaveData);

    //     return () => {
    //       localStorage.setItem(`${id}`, `${value}`);
    //     };
  }, [id]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Save-Note
      </Button>
      <Dialog open={open} onClose={onSave}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Take you Note Hear</DialogContentText>

          {/* <TextField
            sx={{
              width: { sm: 200, md: 300 },
              "& .MuiInputBase-root": {
                height: 80,
              },
            }}
            id="standard-basic"
            label="Filled"
            variant="filled"
            placeholder="SX"
            //     variant="standard"
          /> */}

          <TextareaAutosize
            style={{
              width: 500,
              height: 500,
              fontSize: "20px",
              padding: "20px",
            }}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button>Clear</Button>
          <Button onClick={onSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Note;
