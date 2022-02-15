import React from "react";
import { Link, Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Layout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { md: 'flex' } }}>CENCOSUD</Typography>

            <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
              <Link to="/invoices/create">
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Crear factura</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Container maxWidth="md" className="card-with-margin">
        <Outlet />
      </Container>
    </React.Fragment>
  );
}
