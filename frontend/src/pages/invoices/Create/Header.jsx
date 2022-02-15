import React from "react";
import { useFormContext } from "react-hook-form";
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useState } from 'react';
import * as moment from 'moment';

export default function Header() {
  const [ broadcastDate, setBroadcastDate ] = useState();
  const { register, setValue, formState: { errors } } = useFormContext({
    default: {
      broadcastDate: moment().format('DD-MM-YYYY'),
    }
  });

  return (
    <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={8}/>
        <Grid item xs={4}>
          <DesktopDatePicker
            label="Fecha emisión"
            mask="__-__-____"
            inputFormat="DD-MM-YYYY"
            value={broadcastDate}
            onChange={(value) => { setBroadcastDate(value); setValue("broadcastDate", value, { shouldValidate: true }) }}
            renderInput={(params) => <TextField {...params} {...register("broadcastDate", { required: true })} error={!!errors.broadcastDate} helperText={errors.broadcastDate ? 'Fecha inválida' : ''} />}
          />
        </Grid>
      </Grid>
    </CardContent>
  );
}