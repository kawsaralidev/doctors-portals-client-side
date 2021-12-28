import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/footer-bg.png";

const footer = {
  background: `url(${bg})`,
  //   backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 60,
};

const Footer = () => {
  return (
    <div>
      <Box style={footer}>
        <Container>
          <Grid container spacing={2} style={{ textAlign: "start", color: "gray" }}>
            <Grid item xs={3}>
              <Typography>Emergency Dental Care</Typography>
              <Typography>Tooth Extraction</Typography>
              <Typography>Treatment of Personal Dieses</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" style={{ color: "#5CE7ED" }}>
                Services
              </Typography>
              <Typography>Emergency Dental Care</Typography>
              <Typography>Tooth Extraction</Typography>
              <Typography>Cheek up</Typography>

              <Typography>Treatment of Personal Dieses</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" style={{ color: "#5CE7ED" }}>
                Oral Health
              </Typography>
              <Typography>Emergency Dental Care</Typography>
              <Typography>Tooth Extraction</Typography>
              <Typography>Cheek up</Typography>

              <Typography>Treatment of Personal Dieses</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6" style={{ color: "#5CE7ED" }}>
                Our Address
              </Typography>
              <Typography>Rajshahi</Typography>
              <Typography>Bangladesh</Typography>
              <Typography>Call Now</Typography>

              <Typography>+8801302156425</Typography>
            </Grid>
          </Grid>
          <Typography style={{ marginBottom: "30px", marginTop: "20px" }}>CopyRight ©2021 All Right Reserved</Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
