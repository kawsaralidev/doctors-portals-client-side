import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Treatment = () => {
    return (
       <Container>
              <Grid container spacing={2} sx={{marginTop: '30px'}}>
                   <Grid item xs={12} sm={6} >
                   <img
                           style={{width: '80%', height: ''}}
                           src={treatment} alt="" />
                   </Grid>
                   <Grid item xs={12} sm={6} style={{textAlign: 'left',}}>
                       <Typography  sx={{ fontWeight: 600 }} variant="h3" 
                                    style={{ marginTop: '30px' }}>
                               Expectational Dental <br />Care, On Your Terms
                       </Typography>
         <Typography  variant="h6" style={{marginTop: '40px',  color: 'gray', paddingRight: '20px'}}>
                           Dental care is the maintenance of healthy teeth and may refer to Oral hygiene,
                           the practice of keeping the mouth and teeth clean in order to prevent dental disorders.
                           Dentistry, the professional care of teeth, including professional
                           oral hygiene and dental surgery.Dentalcare.com provides free continuing education,
                            patient education and practice management resources to help dental
                             professionals succeed 
                       </Typography>
                       <Button variant="contained" style={{ backgroundColor: '#5CE7ED',marginTop:'30px' }}>Learn More</Button>
                   </Grid>
                       
                </Grid>
       </Container>
    );
};

export default Treatment;