import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import PersonPinTwoToneIcon from '@mui/icons-material/PersonPinTwoTone';
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function EmitterData(props) {
  const [ transmitterBusinessName, setTransmitterBusinessName ] = useState('');
  const [ transmitterAddress, setTransmitterAddress ] = useState('');
  const [ transmitterCommune, setTransmitterCommune ] = useState('');
  const [ transmitterCity, setTransmitterCity ] = useState('');
  const [ transmitterEmail, setTransmitterEmail ] = useState('');
  const [ transmitterPhone, setTransmitterPhone ] = useState('');
  const [ transmitterEconomicTwist, setTransmitterEconomicTwist ] = useState('');
  const [ transmitterEconomicActivity, setTransmitterEconomicActivity ] = useState('');

  const { register, setValue, watch, formState: { errors } } = useFormContext();

  const transmitterEconomicActivityWatch = watch('transmitterEconomicActivity', '');
  const transmitterEconomicTwistWatch = watch('transmitterEconomicTwist', '');

  useEffect(() => {
    setTransmitterEconomicActivity(transmitterEconomicActivityWatch === 'create' ? '' : transmitterEconomicActivityWatch);
    setTransmitterEconomicTwist(transmitterEconomicTwistWatch === 'create' ? '' : transmitterEconomicTwistWatch);

    if (transmitterEconomicActivityWatch === 'create') {
      return props.openEconomicActivity(true);
    }
    if (transmitterEconomicTwistWatch === 'create') {
      return props.openEconomicTwist(true);
    }
  }, [transmitterEconomicActivityWatch, transmitterEconomicTwistWatch]);

  return (<>
    <CardHeader avatar={<PersonPinTwoToneIcon fontSize="large" color="secondary" />} title="DATOS EMISOR" subheader="Emisión de factura" />
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register("transmitterBusinessName", { required: true, maxLength: 1024 })} error={!!errors.transmitterBusinessName} helperText={errors.transmitterBusinessName ? 'La razón social es inválida' : ''}
            label="Razón social"
            required
            value={transmitterBusinessName}
            onChange={e => { setTransmitterBusinessName(e.target.value); setValue("transmitterBusinessName", e.target.value) }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterAddress", { required: true, maxLength: 1024 })} error={!!errors.transmitterAddress} helperText={errors.transmitterAddress ? 'La dirección es inválida' : ''}
            label="Dirección"
            required
            value={transmitterAddress}
            onChange={e => { setTransmitterAddress(e.target.value); setValue("transmitterAddress", e.target.value) }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <MapIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("transmitterCommune", { required: true, maxLength: 1024 })} error={!!errors.transmitterCommune} helperText={errors.transmitterCommune ? 'La comuna es inválida' : ''}
            label="Comuna"
            required
            value={transmitterCommune}
            onChange={e => { setTransmitterCommune(e.target.value); setValue("transmitterCommune", e.target.value) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("transmitterCity", { required: true, maxLength: 1024 })} error={!!errors.transmitterCity} helperText={errors.transmitterCity ? 'La ciudad es inválida' : ''}
            label="Ciudad"
            required
            value={transmitterCity}
            onChange={e => { setTransmitterCity(e.target.value); setValue("transmitterCity", e.target.value) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterEmail", { required: true, maxLength: 1024, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} error={!!errors.transmitterEmail} helperText={errors.transmitterEmail ? 'El correo electrónico es invalido' : ''}
            label="Correo electrónico"
            required
            value={transmitterEmail}
            onChange={e => { setTransmitterEmail(e.target.value); setValue("transmitterEmail", e.target.value) }}
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterPhone", { required: true, minLength: 7, maxLength: 12 })} error={!!errors.transmitterPhone} helperText={errors.transmitterPhone ? 'El teléfono es inválido' : ''}
            label="Teléfono"
            required
            value={transmitterPhone}
            onChange={e => { setTransmitterPhone(e.target.value); setValue("transmitterPhone", e.target.value) }}
            InputProps={{
              startAdornment: <InputAdornment position="start">+56 9</InputAdornment>,
              endAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterEconomicTwist", { required: true })} error={!!errors.transmitterEconomicTwist} helperText={errors.transmitterEconomicTwist ? 'El giro es obligatorio' : ''}
            select
            label="Giro"
            required
            value={transmitterEconomicTwist}
          >
            <MenuItem value="create"><ListItemIcon><AddCircleOutlineIcon fontSize="small" /></ListItemIcon> Crear giro</MenuItem>

            {props.economicTwistList.map((economicTwist, index) => <MenuItem key={index} value={economicTwist.id}>{economicTwist.name}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("transmitterEconomicActivity", { required: true })} error={!!errors.transmitterEconomicActivity} helperText={errors.transmitterEconomicActivity ? 'La actividad económica es obligatoria' : ''}
            select
            label="Actividad económica"
            required
            value={transmitterEconomicActivity}
          >
            <MenuItem value="create"><ListItemIcon><AddCircleOutlineIcon fontSize="small" /></ListItemIcon> Crear actividad económica</MenuItem>
            
            {props.economicActivityList.map((economicActivity, index) => <MenuItem key={index} value={economicActivity.id}>{economicActivity.name}</MenuItem>)}
          </TextField>
        </Grid>
      </Grid>
    </CardContent>
  </>);
}