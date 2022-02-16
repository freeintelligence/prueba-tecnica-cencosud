import React from "react";
import { useFormContext } from "react-hook-form";
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { useState } from 'react';

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
            {...register("receiverRut", { required: true })} error={!!errors.receiverRut} helperText={errors.receiverRut ? 'El RUT es obligatorio' : ''}
            label="RUT empresa"
            value={receiverRut}
            onChange={e => { setReceiverRut(e.target.value); setValue("receiverRut", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            {...register("receiverBusinessName", { required: true })} error={!!errors.receiverBusinessName} helperText={errors.receiverBusinessName ? 'La razón social es obligatoria' : ''}
            label="Razón social"
            value={receiverBusinessName}
            onChange={e => { setReceiverBusinessName(e.target.value); setValue("receiverBusinessName", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("receiverAddress", { required: true })} error={!!errors.receiverAddress} helperText={errors.receiverAddress ? 'La dirección es obligatoria' : ''}
            label="Dirección"
            value={receiverAddress}
            onChange={e => { setReceiverAddress(e.target.value); setValue("receiverAddress", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("receiverCommune", { required: true })} error={!!errors.receiverCommune} helperText={errors.receiverCommune ? 'La comuna es obligatoria' : ''}
            label="Comuna"
            value={receiverCommune}
            onChange={e => { setReceiverCommune(e.target.value); setValue("receiverCommune", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            {...register("receiverCity", { required: true })} error={!!errors.receiverCity} helperText={errors.receiverCity ? 'La ciudad es obligatoria' : ''}
            label="Ciudad"
            value={receiverCity}
            onChange={e => { setReceiverCity(e.target.value); setValue("receiverCity", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            {...register("receiverContactName", { required: true })} error={!!errors.receiverContactName} helperText={errors.receiverContactName ? 'El contacto es obligatorio' : ''}
            label="Nombre contacto"
            value={receiverContactName}
            onChange={e => { setReceiverContactName(e.target.value); setValue("receiverContactName", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            {...register("receiverContactRut", { required: true })} error={!!errors.receiverContactRut} helperText={errors.receiverContactRut ? 'El RUT es obligatorio' : ''}
            label="RUT contacto"
            value={receiverContactRut}
            onChange={e => { setReceiverContactRut(e.target.value); setValue("receiverContactRut", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("receiverEconomicTwist", { required: true })} error={!!errors.receiverEconomicTwist} helperText={errors.receiverEconomicTwist ? 'El giro es obligatorio' : ''}
            select
            label="Giro"
            value={receiverEconomicTwist}
            onChange={e => { setReceiverEconomicTwist(e.target.value); setValue("receiverEconomicTwist", e.target.value, { shouldValidate: true }) }}
          >
            <MenuItem value={1}>
              Giro económico #1
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            {...register("receiverContactEmail", { required: true })} error={!!errors.receiverContactEmail} helperText={errors.receiverContactEmail ? 'El correo electrónico es obligatorio' : ''}
            label="Correo electrónico contacto"
            value={receiverContactEmail}
            onChange={e => { setReceiverContactEmail(e.target.value); setValue("receiverContactEmail", e.target.value, { shouldValidate: true }) }}
          />
        </Grid>
      </Grid>
    </CardContent>
  </>);
}