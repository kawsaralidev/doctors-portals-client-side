import { Button, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../images/appointment-bg.png";

const banner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 60,
};

const Contact = () => {
  return (
    <Box style={banner}>
      <Box>
        <Typography variant="h6" style={{ color: "#5CE7ED", fontWeight: "bold", paddingTop: "50px" }}>
          CONTACT US
        </Typography>
        <Typography variant="h3">Always Connect With US</Typography>
        <form style={{ paddingTop: "50px" }}>
          <TextField sx={{ width: "50%", background: "white", marginTop: "20px" }} label="Name" required variant="standard" />
          <br />
          <TextField sx={{ width: "50%", background: "white", marginTop: "20px" }} label="Email" type="email" required variant="standard" />
          <br />
          <TextField sx={{ width: "50%", background: "white", marginTop: "20px" }} label="text" required variant="standard" />
          <br />
          <Button
            style={{ marginTop: "20px", marginBottom: "50px", backgroundColor: "#5CE7ED", color: "black" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
