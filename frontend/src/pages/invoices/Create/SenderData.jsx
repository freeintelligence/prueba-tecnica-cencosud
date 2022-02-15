import React from "react";
import { useFormContext } from "react-hook-form";
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
import { useState } from 'react';

export default function SenderData() {
  const [ businessName, setBusinessName ] = useState();
  const [ address, setAddress ] = useState();
  const [ commune, setCommune ] = useState();
  const [ city, setCity ] = useState();
  const [ email, setEmail ] = useState();
  const [ phone, setPhone ] = useState();
  const [ economicTwist, setEconomicTwist ] = useState();
  const [ economicActivity, setEconomicActivity ] = useState();

  const { register, setValue } = useFormContext();

  return (<>
    <CardHeader avatar={<PersonPinTwoToneIcon fontSize="large" color="secondary" />} title="DATOS EMISOR" subheader="Emisión de factura" />
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Razón social"
            value={businessName}
            onChange={e => { setBusinessName(e.target.value); setValue("businessName", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Dirección"
            value={address}
            onChange={e => { setAddress(e.target.value); setValue("address", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Comuna"
            value={commune}
            onChange={e => { setCommune(e.target.value); setValue("commune", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Ciudad"
            value={city}
            onChange={e => { setCity(e.target.value); setValue("city", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Correo electrónico"
            value={email}
            onChange={e => { setEmail(e.target.value); setValue("email", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Teléfono"
            value={phone}
            onChange={e => { setPhone(e.target.value); setValue("phone", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Giro"
            value={economicTwist}
            onChange={e => { setEconomicTwist(e.target.value); setValue("economicTwist", e.target.value, { shouldValidate: true }) }}
          >
            <MenuItem value={1}>
              Giro económico #1
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Actividad económica"
            value={economicActivity}
            onChange={e => { setEconomicActivity(e.target.value); setValue("economicActivity", e.target.value, { shouldValidate: true }) }}
          >
            <MenuItem value={1}>
              Actividad económica #1
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </CardContent>
  </>);
}