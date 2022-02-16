import React from "react";
import { useFormContext } from "react-hook-form";
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { useState } from 'react';
import { validate, format } from 'rut.js';

export default function ReceiverData() {
  const [ receiverRut, setReceiverRut ] = useState('');
  const [ receiverBusinessName, setReceiverBusinessName ] = useState('');
  const [ receiverAddress, setReceiverAddress ] = useState('');
  const [ receiverCommune, setReceiverCommune ] = useState('');
  const [ receiverCity, setReceiverCity ] = useState('');
  const [ receiverContactName, setReceiverContactName ] = useState('');
  const [ receiverContactRut, setReceiverContactRut ] = useState('');
  const [ receiverEconomicTwist, setReceiverEconomicTwist ] = useState(1);
  const [ receiverContactEmail, setReceiverContactEmail ] = useState('');

  const { register, setValue, formState: { errors } } = useFormContext();

  return (<>
    <CardHeader avatar={<AdminPanelSettingsTwoToneIcon fontSize="large" color="secondary" />} title="DATOS RECEPTOR" subheader="Emisión de factura" />
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            {...register("receiverRut", { required: true, validate: v => validate(v) })} error={!!errors.receiverRut} helperText={errors.receiverRut ? 'El RUT es inválido' : ''}
            label="RUT empresa"
            required
            value={receiverRut}
            onChange={e => { setReceiverRut(format(e.target.value)); setValue("receiverRut", format(e.target.value)) }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            {...register("receiverBusinessName", { required: true, maxLength: 1024 })} error={!!errors.receiverBusinessName} helperText={errors.receiverBusinessName ? 'La razón social es inválida' : ''}
            label="Razón social"
            required
            value={receiverBusinessName}
            onChange={e => { setReceiverBusinessName(e.target.value); setValue("receiverBusinessName", e.target.value) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("receiverAddress", { required: true, maxLength: 1024 })} error={!!errors.receiverAddress} helperText={errors.receiverAddress ? 'La dirección es inválida' : ''}
            label="Dirección"
            required
            value={receiverAddress}
            onChange={e => { setReceiverAddress(e.target.value); setValue("receiverAddress", e.target.value) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("receiverCommune", { required: true, maxLength: 1024 })} error={!!errors.receiverCommune} helperText={errors.receiverCommune ? 'La comuna es inválida' : ''}
            label="Comuna"
            required
            value={receiverCommune}
            onChange={e => { setReceiverCommune(e.target.value); setValue("receiverCommune", e.target.value) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("receiverCity", { required: true, maxLength: 1024 })} error={!!errors.receiverCity} helperText={errors.receiverCity ? 'La ciudad es inválida' : ''}
            label="Ciudad"
            required
            value={receiverCity}
            onChange={e => { setReceiverCity(e.target.value); setValue("receiverCity", e.target.value) }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            {...register("receiverContactName", { required: true, maxLength: 1024 })} error={!!errors.receiverContactName} helperText={errors.receiverContactName ? 'El contacto es inválido' : ''}
            label="Nombre contacto"
            required
            value={receiverContactName}
            onChange={e => { setReceiverContactName(e.target.value); setValue("receiverContactName", e.target.value) }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            {...register("receiverContactRut", { required: true, validate: v => validate(v) })} error={!!errors.receiverContactRut} helperText={errors.receiverContactRut ? 'El RUT es inválido' : ''}
            label="RUT contacto"
            required
            value={receiverContactRut}
            onChange={e => { setReceiverContactRut(format(e.target.value)); setValue("receiverContactRut", format(e.target.value)) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("receiverEconomicTwist", { required: true })} error={!!errors.receiverEconomicTwist} helperText={errors.receiverEconomicTwist ? 'El giro es obligatorio' : ''}
            select
            label="Giro"
            required
            value={receiverEconomicTwist}
            onChange={e => { setReceiverEconomicTwist(e.target.value); setValue("receiverEconomicTwist", e.target.value) }}
          >
            <MenuItem value={1}>
              Giro económico #1
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("receiverContactEmail", { required: true, maxLength: 1024, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} error={!!errors.receiverContactEmail} helperText={errors.receiverContactEmail ? 'El correo electrónico es inválido' : ''}
            label="Correo electrónico contacto"
            required
            value={receiverContactEmail}
            onChange={e => { setReceiverContactEmail(e.target.value); setValue("receiverContactEmail", e.target.value) }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </>);
}