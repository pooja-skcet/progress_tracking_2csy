import React from 'react';
import { Grid, Checkbox, FormControlLabel } from '@mui/material';
function DaysForm() {
 const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 return (
 <Grid container spacing={2}>
 {days.map((day, index) => (
 <Grid item xs={12} sm={6} md={4} key={index}>
 <FormControlLabel
 control={<Checkbox />}
 label={day}
 />
 </Grid>
 ))}
 </Grid>
 );
}
export default DaysForm