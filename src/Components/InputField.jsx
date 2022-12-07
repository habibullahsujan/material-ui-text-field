import * as React from "react";
import TextField from "@mui/material/TextField";
import "./basicStyles.css";

const InputField = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        marginTop: "50vh",
      }}
    >
      <TextField id="outlined-basic" label="My-variant" variant="outlined" />
    </div>
  );
};

export default InputField;
