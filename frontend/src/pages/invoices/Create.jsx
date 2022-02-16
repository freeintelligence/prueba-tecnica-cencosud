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

export default function Create() {
  const [ economicTwistOpen, setEconomicTwistOpen ] = useState(false);
  const [ economicActivityOpen, setEconomicActivityOpen ] = useState(false);

  const [ economicTwistList, setEconomicTwistList ] = useState([]);
  const [ economicActivityList, setEconomicActivityList ] = useState([]);

  const methods = useForm({ mode: 'all' });

  useEffect(() => {
    loadNeedsData();
  }, []);

  const onCreateTransmitterEconomicTwist = (createdValue) => {
    setEconomicTwistOpen(false);

    if (createdValue && createdValue.id) {
      setEconomicTwistList(oldArray => [createdValue, ...oldArray]);
      methods.setValue("transmitterEconomicTwist", createdValue.id, { shouldValidate: true });
    }
  }

  const onCreateTransmitterEconomicActivity = (createdValue) => {
    setEconomicActivityOpen(false);

    if (createdValue && createdValue.id) {
      setEconomicActivityList(oldArray => [createdValue, ...oldArray]);
      methods.setValue("transmitterEconomicActivity", createdValue.id, { shouldValidate: true });
    }
  }

  const loadNeedsData = async () => {
    try {
      setEconomicTwistList(await economicTwistApi.getAll());
      setEconomicActivityList(await economicActivityApi.getAll());
    } catch (err) {

    }
  }

  const onSubmit = (data) => {
    console.log('submit', data);
  }

  return (
    <FormProvider {...methods}>
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
          <div className="form-container">
            <Header></Header>
            <EmitterData economicTwistList={economicTwistList} economicActivityList={economicActivityList} openTransmitterEconomicTwist={(status) => setEconomicTwistOpen(status)} openTransmitterEconomicActivity={(status) => setEconomicActivityOpen(status)}></EmitterData>
            <ReceiverData economicTwistList={economicTwistList} economicActivityList={economicActivityList} openTransmitterEconomicTwist={(status) => setEconomicTwistOpen(status)} openTransmitterEconomicActivity={(status) => setEconomicActivityOpen(status)}></ReceiverData>
            <Products></Products>
          </div>

          <SimpleStoreDialog title="Crear giro" content="Estás por crear un nuevo giro que estará disponible para próximas facturas." inputLabel="Nombre del giro" fieldName="name" open={economicTwistOpen} store={async (data) => await economicTwistApi.store(data)} onClose={createdValue => onCreateTransmitterEconomicTwist(createdValue)} />
          <SimpleStoreDialog title="Crear actividad económica" content="Estás por crear una nueva actividad económica que estará disponible para próximas facturas." fieldName="name" inputLabel="Nombre de la actividad económica" open={economicActivityOpen} store={async (data) => await economicActivityApi.store(data)} onClose={createdValue => onCreateTransmitterEconomicActivity(createdValue)} />

          <CardActions className="action-buttons">
            <Button type="submit" size="medium" variant="outlined" color="primary">Enviar factura</Button>
            <Button size="medium" variant="text">Limpiar campos</Button>
          </CardActions>
        </Card>
      </form>
    </FormProvider>
  );
}
