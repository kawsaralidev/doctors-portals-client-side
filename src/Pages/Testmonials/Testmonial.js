import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import people1 from "../../images/people-1.png";
import people2 from "../../images/people-2.png";
import people3 from "../../images/people-3.png";

const Testmonial = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Grid variant="h6" style={{ boxShadow: "0px 0px 5px gray", padding: "30px", textAlign: "center", color: "gray", margin: "5px" }}>
            It is a long established that fact by the readable content of a lot layout. The point of using lorem a more or less normal
            distribute using content here content.
            <Grid container spacing={2} style={{ marginTop: "25px" }}>
              <Grid item xs={5} style={{ marginTop: "20px" }}>
                <img src={people1} alt="" />
              </Grid>
              <Grid item xs={7} style={{ marginTop: "30px", textAlign: "start" }}>
                <Typography variant="h5" style={{ color: "#5CE7ED", fontWeight: "bold" }}>
                  Winson Herry
                </Typography>
                <Typography>California</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid variant="h6" style={{ boxShadow: "0px 0px 5px gray", padding: "30px", textAlign: "center", color: "gray", margin: "5px" }}>
            It is a long established that fact by the readable content of a lot layout. The point of using lorem a more or less normal
            distribute using content here content.
            <Grid container spacing={2} style={{ marginTop: "25px" }}>
              <Grid item xs={5} style={{ marginTop: "20px" }}>
                <img src={people2} alt="" />
              </Grid>
              <Grid item xs={7} style={{ marginTop: "30px", textAlign: "start" }}>
                <Typography variant="h5" style={{ color: "#5CE7ED", fontWeight: "bold" }}>
                  Winson Herry
                </Typography>
                <Typography>California</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Grid variant="h6" style={{ boxShadow: "0px 0px 5px gray", padding: "30px", textAlign: "center", color: "gray", margin: "5px" }}>
            It is a long established that fact by the readable content of a lot layout. The point of using lorem a more or less normal
            distribute using content here content.
            <Grid container spacing={2} style={{ marginTop: "25px" }}>
              <Grid item xs={5} style={{ marginTop: "20px" }}>
                <img src={people3} alt="" />
              </Grid>
              <Grid item xs={7} style={{ marginTop: "30px", textAlign: "start" }}>
                <Typography variant="h5" style={{ color: "#5CE7ED", fontWeight: "bold" }}>
                  Winson Herry
                </Typography>
                <Typography>California</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testmonial;
