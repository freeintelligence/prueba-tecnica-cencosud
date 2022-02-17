import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
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
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect } from "react";
import { useSnackbar } from 'notistack';

export default function ReceiverData() {
  const { enqueueSnackbar } = useSnackbar();
  const { register, control, setValue, getValues, formState: { errors },  } = useFormContext();
  const { fields, prepend, remove } = useFieldArray({ name: 'products', control });

  const addProduct = () => {
    prepend({ name: '', amount: 0, price: 0, subtotal: 0 }, { shouldFocus: !!fields.length });
  }

  const removeProduct = (index) => {
    if (fields.length === 1) {
      enqueueSnackbar('Debe haber como mínimo un producto!', { variant: 'error' });
      return;
    }

    remove(index);
  }

  const setProductValue = (index, keyname, value) => {
    setValue(`products.${index}.${keyname}`, value);

    const subtotal = getValues(`products.${index}.price`) * getValues(`products.${index}.amount`);
    setValue(`products.${index}.subtotal`, subtotal.toLocaleString(), { shouldValidate: true });
  }

  const calcTotal = () => {
    return getValues('products')?.reduce((prev, curr) => prev + (curr.price * curr.amount), 0) ?? 0;
  }

  const calcTax = () => {
    return process.env.REACT_APP_TAX_PERCENT * calcTotal() / 100;
  }

  const calcSubtotal = () => {
    return calcTotal() - calcTax();
  }

  useEffect(() => {
    if (!fields.length) {
      addProduct();
    }
  }, []);

  return (<>
    <CardHeader avatar={<ProductionQuantityLimitsIcon fontSize="large" color="secondary" />} title="PRODUCTOS" subheader="Emisión de factura" />
    <CardContent>
      <TableContainer component={Paper} sx={{ "& td": { border: 0 }, boxShadow: 'none' }}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <TableCell>Nombre producto</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Precio unidad</TableCell>
              <TableCell align="center">Subtotal</TableCell>
              <TableCell align="right">
                <Button onClick={() => addProduct()} variant="outlined" endIcon={<AddCircleIcon />}>Nuevo</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((product, index) => <TableRow key={product.id}>
              <TableCell width={"30%"}>
                <TextField
                  {...register(`products.${index}.name`, { required: true, maxLength: 1024 })}
                  error={!!errors?.products?.[index]?.name}
                  helperText={errors?.products?.[index]?.name ? 'El nombre es inválido' : ''}
                  onChange={e => setProductValue(index, 'name', e.target.value)}
                  label="Nombre producto"
                  size="small"
                />
              </TableCell>
              <TableCell width={"20%"} align="right">
                <TextField
                  {...register(`products.${index}.amount`, { required: true, min: 1, max: Number.MAX_SAFE_INTEGER })}
                  error={!!errors?.products?.[index]?.amount}
                  helperText={errors?.products?.[index]?.amount ? 'La cantidad es inválida' : ''}
                  onChange={e => setProductValue(index, 'amount', Math.round(e.target.value ?? 0))}
                  label="Cantidad"
                  size="small"
                  type="number"
                />
              </TableCell>
              <TableCell width={"20%"} align="right">
                <TextField
                  {...register(`products.${index}.price`, { required: true, min: 1, max: Number.MAX_SAFE_INTEGER })}
                  error={!!errors?.products?.[index]?.price}
                  helperText={errors?.products?.[index]?.price ? 'El precio es inválido' : ''}
                  onChange={e => setProductValue(index, 'price', Math.round(e.target.value ?? 0))}
                  label="Precio unidad"
                  size="small"
                  type="number"
                />
              </TableCell>
              <TableCell width={"15%"} align="right"><TextField {...register(`products.${index}.subtotal`)} label="Subtotal" size="small" disabled /></TableCell>
              <TableCell width={"15%"} align="right"><IconButton onClick={() => removeProduct(index)} color="error"><DeleteIcon /></IconButton></TableCell>
            </TableRow>)}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={3}>Subtotal</TableCell>
              <TableCell align="right"><Chip label={`$ ${calcSubtotal().toLocaleString()}`} /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>IVA</TableCell>
              <TableCell align="right">{process.env.REACT_APP_TAX_PERCENT}%</TableCell>
              <TableCell align="right"><Chip label={`$ ${calcTax().toLocaleString()}`} /></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align="right"><Chip label={`$ ${calcTotal().toLocaleString()}`} /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </>);
}