import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import testmonials from "../../images/testmonial.png";
import Testmonial from "./Testmonial";

const Testmonials = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={{ marginTop: "50px", marginBottom: " 50px" }}>
          <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
            <Typography sx={{ fontWeight: 600 }} variant="h5" style={{ marginTop: "40px", color: "#5CE7ED", paddingRight: "20px" }}>
              TESTMONIAL
            </Typography>
            <Typography sx={{ fontWeight: 600 }} variant="h3" style={{ marginTop: "20px", paddingRight: "20px" }}>
              What's Our Patient <br />
              Says
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "end", justifyContent: "end" }}>
            <img style={{ width: 250 }} src={testmonials} alt="" />
          </Grid>
        </Grid>
        <Testmonial></Testmonial>
      </Box>
    </Container>
  );
};

export default Testmonials;
