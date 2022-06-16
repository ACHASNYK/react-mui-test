import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Data } from './data';
// import './App.css';

function App() {
  const headerRow1 = Object.keys(Data.Kyivska.G);
    console.log(headerRow1)// Do whatever you like with key and value
  // const headerRow2 = Object.keys(Data.Kyivska.G.)
  
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 500, maxWidth: 1500 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' colSpan={1}></TableCell>
              {headerRow1.map((e) => (
              
              
              <TableCell align='center' colSpan={3}>{e}</TableCell>
              
              )
            )  
            }
            </TableRow>
            <TableRow>
              <TableCell align='center' colSpan={1}>
                    "Regions"
                  </TableCell>
              {Object.keys(Data.Kyivska.G[2017]).map((e) =>(
                            
                  <TableCell align='center'>{e}</TableCell> 
              
              )
              )}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      
    </Paper>
  );
}

export default App;
