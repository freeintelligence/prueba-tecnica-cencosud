import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useForm, FormProvider } from "react-hook-form";
import Header from './Create/Header';
import EmitterData from './Create/EmitterData';
import ReceiverData from './Create/ReceiverData';
import Products from './Create/Products';
import './Create/index.css';
import Logo from './../../assets/logo-cencosud.png';
import { economicTwistApi } from "../../api/economic-twist";
import { economicActivityApi } from "../../api/economic-activity";
import SimpleStoreDialog from './../../components/SimpleStoreDialog/SimpleStoreDialog';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { invoicesApi } from '../../api/invoices';
import { useSnackbar } from 'notistack';

export default function Create() {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ success, setSuccess ] = useState(false);
  const [ economicTwistOpen, setEconomicTwistOpen ] = useState(false);
  const [ economicTwistOpenFromComponent, setEconomicTwistOpenFromComponent ] = useState();
  const [ economicActivityOpen, setEconomicActivityOpen ] = useState(false);
  const [ economicTwistList, setEconomicTwistList ] = useState([]);
  const [ economicActivityList, setEconomicActivityList ] = useState([]);

  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({ mode: 'all' });

  useEffect(() => {
    loadNeedsData();
  }, []);

  const onCreateEconomicTwist = (createdValue) => {
    setEconomicTwistOpen(false);

    if (createdValue && createdValue.id) {
      setEconomicTwistList(oldArray => [createdValue, ...oldArray]);
      methods.setValue(economicTwistOpenFromComponent, createdValue.id, { shouldValidate: true });
    }
  }

  const onCreateEconomicActivity = (createdValue) => {
    setEconomicActivityOpen(false);

    if (createdValue && createdValue.id) {
      setEconomicActivityList(oldArray => [createdValue, ...oldArray]);
      methods.setValue("transmitterEconomicActivity", createdValue.id, { shouldValidate: true });
    }
  }

  const loadNeedsData = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      setEconomicTwistList(await economicTwistApi.getAll());
      setEconomicActivityList(await economicActivityApi.getAll());
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  }

  const onSubmit = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const values = methods.getValues();
      await invoicesApi.store(values);

      setSuccess(true);
    } catch (err) {
      enqueueSnackbar('Tenemos problemas para emitir la factura, intenta más tarde!', { variant: 'error' });
    }

    setLoading(false);
  }

  return (
    <FormProvider {...methods}>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete="off">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2, display: { md: 'flex' } }}>
              CREAR FACTURA
            </Typography>

            <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}></Box>
            <Box sx={{ flexGrow: 0, display: { md: 'flex' } }}>
              <img style={{ margin: '6px' }} height="48px" src={Logo} />
            </Box>
          </Toolbar>
        </AppBar>
        <Card variant="outlined">
          {success ? (<>
            <div className="form-container">
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">La factura fue emitida exitosamente! Te enviaremos un correo para confirmar.</Alert>
              </Stack>
            </div>
          </>) : null}

          {error ? (<>
            <div className="form-container">
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Tenemos problemas para cargar la información necesaria en la emisión de facturas. Intenta nuevamente!</Alert>
              </Stack>
            </div>

            <CardActions className="action-buttons">
              <Button onClick={() => loadNeedsData()} size="medium" variant="contained" color="error">Reintentar</Button>
            </CardActions>
          </>) : (<>
            <div className="form-container">
              <Header></Header>
              <EmitterData economicTwistList={economicTwistList} economicActivityList={economicActivityList} openEconomicTwist={(status, from_component) => { setEconomicTwistOpen(status); setEconomicTwistOpenFromComponent(from_component); }} openEconomicActivity={(status) => setEconomicActivityOpen(status)}></EmitterData>
              <ReceiverData economicTwistList={economicTwistList} economicActivityList={economicActivityList} openEconomicTwist={(status, from_component) => { setEconomicTwistOpen(status); setEconomicTwistOpenFromComponent(from_component); }} openEconomicActivity={(status) => setEconomicActivityOpen(status)}></ReceiverData>
              <Products></Products>
            </div>

            <SimpleStoreDialog title="Crear giro" content="Estás por crear un nuevo giro que estará disponible para próximas facturas." inputLabel="Nombre del giro" fieldName="name" open={economicTwistOpen} store={async (data) => await economicTwistApi.store(data)} onClose={createdValue => onCreateEconomicTwist(createdValue)} />
            <SimpleStoreDialog title="Crear actividad económica" content="Estás por crear una nueva actividad económica que estará disponible para próximas facturas." fieldName="name" inputLabel="Nombre de la actividad económica" open={economicActivityOpen} store={async (data) => await economicActivityApi.store(data)} onClose={createdValue => onCreateEconomicActivity(createdValue)} />

            <CardActions className="action-buttons">
              <Button type="submit" size="medium" variant="outlined" color="primary">Enviar factura</Button>
              <Button size="medium" variant="text">Limpiar campos</Button>
            </CardActions>
          </>)}

        </Card>
      </form>
    </FormProvider>
  );
}
