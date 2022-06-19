import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Data } from './data';
import New_Window from './New_Window';
import RenderInWindow from './RenderWindow';
import { Typography } from '@mui/material';


function App() {
  
  const [open, setOpen] = useState();
  const headerYears = ['2017', '2018', '2019'];                
  const subYears = ['XX', 'YY', 'ZZ'];
  const noDATA  = ['a', 'b', 'c'];
  
    
  return (
    
    <Paper elevation={4} sx={{ width: '80%', margin: 10 }}>
      <TableContainer sx={{ maxHeight: 500, maxWidth: 1000, margin: 20 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead style={{background: "grey" }} >
            <TableRow hover>
              <TableCell align='center'></TableCell>
              {headerYears.map(year => (           
                  <TableCell key={year} align='center' colSpan={3}><Typography variant='h5'>{year}</Typography></TableCell>
                      
                  ))}
            </TableRow>
            
            <TableRow>
              <TableCell align='center'><Typography variant='h6'>regions</Typography></TableCell>
              {subYears.map(i => (
                subYears.map(e => <TableCell key={e} align='center'><Typography variant='h6'>{e}</Typography></TableCell>) )
              )}
            </TableRow>
            
          </TableHead>
          <TableBody>
            {Object.keys(Data).map((region, x) => (               
              <TableRow key={region}>
                <TableCell key={x} align='center'><Typography variant='h6'>{region}</Typography></TableCell>
                { headerYears.map(year => (
                  Data[region]?.G[year] ?
                    Object.entries(Data[region]?.G[year]).map
                      (data => <TableCell key={data} align='center' onClick={() => setOpen(true)} >{data[1]?.value}</TableCell>) : 
                      noDATA.map(i => <TableCell key={i} align='center'>{'no data'}</TableCell>)
                ))    
                }
                
                   
                
              </TableRow> ))}  
            
          </TableBody>
        </Table>
      </TableContainer>
      { open && <RenderInWindow></RenderInWindow> }      
      </Paper>
            
            
                 

    
  );
}
 


             
export default App;
