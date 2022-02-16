import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { useForm, FormProvider } from "react-hook-form";
import Header from './Create/Header';
import EmitterData from './Create/EmitterData';
import ReceiverData from './Create/ReceiverData';
import Products from './Create/Products';
import './Create/index.css';

export default function Create() {
  const methods = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    console.log('submit', data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              CREAR FACTURA
            </Typography>
          </Toolbar>
        </AppBar>
        <Card variant="outlined">
          <Header></Header>
          <EmitterData></EmitterData>
          <ReceiverData></ReceiverData>
          <Products></Products>

          <CardActions style={{justifyContent: 'center'}}>
            <Button type="submit" size="medium" variant="outlined" color="primary">Enviar factura</Button>
            <Button size="medium" variant="outlined" color="warning">Limpiar</Button>
          </CardActions>
        </Card>
      </form>
    </FormProvider>
  );
}
