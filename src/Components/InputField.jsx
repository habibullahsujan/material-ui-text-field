import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import "./basicStyles.css";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#1d72e7",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

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
      <CssTextField label="My-Style" />
    </div>
  );
};

export default InputField;
