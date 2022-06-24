import React, {  useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Data } from './data';
import RenderInWindow from './RenderWindow';
import { Typography } from '@mui/material';
import { yearsPreProcessing } from './helper';




function App() {
  
  const [open, setOpen] = useState();
  const [index, setIndex] = useState()
  const { result_array_years, longest_sub }  = yearsPreProcessing(Data);
  console.log(result_array_years, longest_sub)
  // let subYears = [];
  // subYears = subheaderPreProcessing(Data);  
  
  function handleIndex(e) {
    setIndex(e);
    
  }
// console.log(index)
  function handleOpen () {
    setOpen(true)
  }
      
  return (
    
    <Paper elevation={4} sx={{ width: '80%', marginLeft: 30 }}>
      <TableContainer sx={{ maxHeight: 800, maxWidth: 1200, marginLeft: 10, padding: 10 }}>
        <Table stickyHeader aria-label='sticky table' sx={{padding: '10'}}>
          <TableHead >
            <TableRow>
              <TableCell align='center'></TableCell>
              {result_array_years.map(year => (           
                <TableCell style={{width:100}} key={year} align='center' colSpan={`${longest_sub.length}`}><Typography variant='h5'>{year}</Typography></TableCell>
                      
                  ))}
            </TableRow>
            
            <TableRow>
              <TableCell align='center'><Typography variant='h6'>regions</Typography></TableCell>
              {result_array_years.map(i => (
                longest_sub.map(e => <TableCell style={{width:100}} key={e} align='center'><Typography variant='body1'>{e}</Typography></TableCell>) )
              )}
            </TableRow>
            
          </TableHead>
          <TableBody>
            {Object.keys(Data).map((region, x) => (               
              <TableRow key={region} hover>
                <TableCell key={x} align='center'><Typography variant='h6'>{region}</Typography></TableCell>
                {result_array_years?.map(year => (
                  Data[region]?.G[year] ? (longest_sub.map(sub => (Data[region]?.G[year]?.[sub] ? <TableCell key={sub} align='center' onClick={(e) => handleOpen() } >{Data[region]?.G[year]?.[sub]?.value}</TableCell> : 
                  <TableCell key={sub} align='center'><Typography color={'darkred'} variant='caption'>{'n/a'}</Typography></TableCell> ))) :
                  
                  (longest_sub.map(o => <TableCell key={o} align='center'><Typography color={'darkred'} variant='caption'>{'n/a'}</Typography></TableCell>))))}
                                
        
              </TableRow> ))}              
          </TableBody>
        </Table>
      </TableContainer>
      {open && <RenderInWindow index={index} handleOpen={handleOpen}></RenderInWindow> }      
    </Paper>
  
  );
}
             
export default App;
