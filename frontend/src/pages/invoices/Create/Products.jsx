import React from "react";
import { useFormContext } from "react-hook-form";
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function ReceiverData() {
  const [ receiverRut, setReceiverRut ] = useState('');
  const [ receiverBusinessName, setReceiverBusinessName ] = useState('');

  const { register, setValue, formState: { errors } } = useFormContext();

  return (<>
    <CardHeader avatar={<ProductionQuantityLimitsIcon fontSize="large" color="secondary" />} title="PRODUCTOS" subheader="Emisión de factura" />
    <CardContent>
      <TableContainer component={Paper} sx={{ "& td": { border: 0 }, boxShadow: 'none' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            {/*<TableRow>
              <TableCell align="center" colSpan={3}>Detalles</TableCell>
              <TableCell align="right" colSpan={2}>Precio</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>*/}
            <TableRow>
              <TableCell>Nombre producto</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="right">Subtotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><TextField label="Descripción" size="small" /></TableCell>
              <TableCell align="right"><TextField label="Descripción" size="small" /></TableCell>
              <TableCell align="right"><TextField label="Descripción" size="small" /></TableCell>
              <TableCell align="right"><TextField label="Descripción" size="small" /></TableCell>
              <TableCell align="right"><IconButton><DeleteIcon /></IconButton></TableCell>
            </TableRow>

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={3}>Subtotal</TableCell>
              <TableCell align="right">Valor sin iva</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>IVA</TableCell>
              <TableCell align="right">10%</TableCell>
              <TableCell align="right">Valor del iva</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align="right">Valor con iva</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </>);
}