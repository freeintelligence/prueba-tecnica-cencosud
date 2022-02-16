import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

export default function SimpleStoreDialog(props) {
  const { register, setValue, handleSubmit, getValues, formState: { errors } } = useForm();

  const handleClose = (value, event, reason) => {
    if (reason === 'backdropClick') {
      return;
    }

    props.onClose(value);
  }

  const onSubmit = () => {
  }

  return (<>
    <Dialog open={props.open} onClose={(e, r) => handleClose(null, e, r)} disableEscapeKeyDown>
      <DialogTitle>{ props.title }</DialogTitle>
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
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => handleClose(null, e)}>Cancelar</Button>
        <Button onClick={handleSubmit(onSubmit)}>Crear</Button>
      </DialogActions>
    </Dialog>
  </>);
}
