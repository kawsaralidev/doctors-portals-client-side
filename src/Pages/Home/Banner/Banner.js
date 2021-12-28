import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Typography, Button, Container } from "@mui/material";
import Box from "@mui/material/Box";
import icon1 from "../../../images/icons/icons1.png";
import icon2 from "../../../images/icons/icons2.png";
import icon3 from "../../../images/icons/icons3.png";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Box style={bannerBg}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item style={{ ...verticalCenter, textAlign: "left", marginBottom: "110PX" }} xs={12} md={6}>
            <Box>
              <Typography variant="h3">
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit
                at accusantium tenetur.
              </Typography>
              <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
                Get Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{ width: "100%", marginTop: "70px" }} src={chair} alt="" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} style={{ textAlign: "start" }}>
            <Grid container style={{ backgroundColor: "#33bfff", padding: "30px", borderRadius: "7px" }}>
              <Grid item xs={4}>
                <img style={{ width: "70%" }} src={icon1} alt="" />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Opening Hours
                </Typography>
                <Typography style={{ color: "white" }}>Our opening time is 8.00am</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={{ textAlign: "start" }}>
            <Grid container style={{ backgroundColor: "#424242", padding: "30px", borderRadius: "7px" }}>
              <Grid item xs={4}>
                <img style={{ width: "55%" }} src={icon2} alt="" />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Visit Our Location
                </Typography>
                <Typography style={{ color: "white" }}>Rajshahi, Bangladesh</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={4} style={{ textAlign: "start" }}>
            <Grid container style={{ backgroundColor: "#33bfff", padding: "30px", borderRadius: "7px" }}>
              <Grid item xs={4}>
                <img style={{ width: "70%" }} src={icon3} alt="" />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography style={{ color: "white" }}>+8801335245565</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
