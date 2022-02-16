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
  const [ transmitterBusinessName, setTransmitterBusinessName ] = useState('');
  const [ transmitterAddress, setTransmitterAddress ] = useState('');
  const [ transmitterCommune, setTransmitterCommune ] = useState('');
  const [ transmitterCity, setTransmitterCity ] = useState('');
  const [ transmitterEmail, setTransmitterEmail ] = useState('');
  const [ transmitterPhone, setTransmitterPhone ] = useState('');
  const [ transmitterEconomicTwist, setTransmitterEconomicTwist ] = useState(1);
  const [ transmitterEconomicActivity, setTransmitterEconomicActivity ] = useState(1);

  const { register, setValue, formState: { errors } } = useFormContext();

  return (<>
    <CardHeader avatar={<PersonPinTwoToneIcon fontSize="large" color="secondary" />} title="DATOS EMISOR" subheader="Emisión de factura" />
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register("transmitterBusinessName", { required: true })} error={!!errors.transmitterBusinessName} helperText={errors.transmitterBusinessName ? 'La razón social es obligatoria' : ''}
            label="Razón social"
            value={transmitterBusinessName}
            onChange={e => { setTransmitterBusinessName(e.target.value); setValue("transmitterBusinessName", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterAddress", { required: true })} error={!!errors.transmitterAddress} helperText={errors.transmitterAddress ? 'La dirección es obligatoria' : ''}
            label="Dirección"
            value={transmitterAddress}
            onChange={e => { setTransmitterAddress(e.target.value); setValue("transmitterAddress", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("transmitterCommune", { required: true })} error={!!errors.transmitterCommune} helperText={errors.transmitterCommune ? 'La comuna es obligatoria' : ''}
            label="Comuna"
            value={transmitterCommune}
            onChange={e => { setTransmitterCommune(e.target.value); setValue("transmitterCommune", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("transmitterCity", { required: true })} error={!!errors.transmitterCity} helperText={errors.transmitterCity ? 'La ciudad es obligatoria' : ''}
            label="Ciudad"
            value={transmitterCity}
            onChange={e => { setTransmitterCity(e.target.value); setValue("transmitterCity", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterEmail", { required: true })} error={!!errors.transmitterEmail} helperText={errors.transmitterEmail ? 'El correo electrónico es obligatorio' : ''}
            label="Correo electrónico"
            value={transmitterEmail}
            onChange={e => { setTransmitterEmail(e.target.value); setValue("transmitterEmail", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterPhone", { required: true })} error={!!errors.transmitterPhone} helperText={errors.transmitterPhone ? 'El teléfono es obligatorio' : ''}
            label="Teléfono"
            value={transmitterPhone}
            onChange={e => { setTransmitterPhone(e.target.value); setValue("transmitterPhone", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterEconomicTwist", { required: true })} error={!!errors.transmitterEconomicTwist} helperText={errors.transmitterEconomicTwist ? 'El giro es obligatorio' : ''}
            select
            label="Giro"
            value={transmitterEconomicTwist}
            onChange={e => { setTransmitterEconomicTwist(e.target.value); setValue("transmitterEconomicTwist", e.target.value, { shouldValidate: true }) }}
          >
            <MenuItem value={1}>
              Giro económico #1
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterEconomicActivity", { required: true })} error={!!errors.transmitterEconomicActivity} helperText={errors.transmitterEconomicActivity ? 'La actividad económica es obligatoria' : ''}
            select
            label="Actividad económica"
            value={transmitterEconomicActivity}
            onChange={e => { setTransmitterEconomicActivity(e.target.value); setValue("transmitterEconomicActivity", e.target.value, { shouldValidate: true }) }}
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