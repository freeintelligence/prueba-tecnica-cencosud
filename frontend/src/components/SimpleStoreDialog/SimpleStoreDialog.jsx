import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import LinearProgress from '@mui/material/LinearProgress';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default function SimpleStoreDialog(props) {
  const [ loadingState, setLoadingState ] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const { register, setValue, handleSubmit, getValues, formState: { errors, isSubmitting } } = useForm();

  const handleClose = (value, _event, reason) => {
    if (reason === 'backdropClick') {
      return;
    }

    props.onClose(value);
  }

  const onSubmit = async () => {
    if (loadingState) {
      return;
    }

    setLoadingState(true);

    try {
      const r = await props.store(getValues());

      handleClose(r);

      enqueueSnackbar('Recurso creado exitosamente!', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar('No fue posible crear el recurso!', { variant: 'error' });
    }

    setLoadingState(false);
  }

  return (<>
    <Dialog open={props.open} onClose={(e, r) => handleClose(null, e, r)} disableEscapeKeyDown>
      <DialogTitle>
        {loadingState ? <LinearProgress sx={{ mb: '12px' }} /> : null}
        { props.title }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{props.content}</DialogContentText>
        <TextField
          sx={{ mt: '24px' }}
          {...register(props.fieldName, { required: true, maxLength: 1024 })}
          error={!!errors[props.fieldName]}
          helperText={errors[props.fieldName] ? 'Campo inválido' : ''}
          autoFocus
          margin="dense"
          label={props.inputLabel}
          onChange={e => setValue(props.fieldName, e.target.value, { shouldValidate: true, shouldDirty: true, shouldTouch: true })}
          type="text"
          fullWidth
          noValidate
          autoComplete="off"
          variant="standard"
          disabled={isSubmitting}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => handleClose(null, e)} disabled={isSubmitting}>Cancelar</Button>
        <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>Crear</Button>
      </DialogActions>
    </Dialog>
  </>);
}
