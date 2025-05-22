import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GestionarCuentas = ({ cliente, onBack }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={onBack}
          variant="outlined"
          sx={{ mr: 2 }}
        >
          Volver
        </Button>
        <h2>Cuentas por cobrar - {cliente.nombre}</h2>
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Buscar..."
          variant="outlined"
          size="small"
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Correo 1</TableCell>
              <TableCell>Fecha Límite</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Debe</TableCell>
              <TableCell>Cobrar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cliente.cuentas.map((cuenta, index) => (
              <TableRow key={index}>
                <TableCell>{cuenta.cliente}</TableCell>
                <TableCell>{cuenta.correo}</TableCell>
                <TableCell>{cuenta.fechaLimite}</TableCell>
                <TableCell sx={{ color: cuenta.status === 'Sin pagar' ? 'red' : 'inherit' }}>
                  {cuenta.status}
                </TableCell>
                <TableCell>{cuenta.debe} Bs.</TableCell>
                <TableCell>
                  <Button variant="contained" color="success">
                    Enviar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, p: 2 }}>
          <div>Total</div>
          <div>{cliente.cuentas.reduce((sum, cuenta) => sum + parseFloat(cuenta.debe), 0)} Bs.</div>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default GestionarCuentas;