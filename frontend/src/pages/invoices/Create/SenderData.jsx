import React from "react";
import { useFormContext } from "react-hook-form";
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
import { useState } from 'react';

export default function SenderData() {
  const [ businessName, setBusinessName ] = useState();
  const { register, setValue } = useFormContext();

  return (<>
    <CardHeader avatar={<PersonPinTwoToneIcon fontSize="large" color="secondary" />} title="DATOS EMISOR" subheader="Emisión de factura" />
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            className="businessName"
            label="Razón social"
            value={businessName}
            onChange={e => { setBusinessName(e.target.value); setValue("businessName", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </>);
}