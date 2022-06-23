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
import { headerPreProcessing, subheaderPreProcessing } from './helper';




function App() {
  
  const [open, setOpen] = useState();
  const [index, setIndex] = useState()
  const headerYears = headerPreProcessing(Data);
  let subYears = [];
  subYears = subheaderPreProcessing(Data);  
  
  function handleIndex(e) {
    setIndex(e);
    
  }
console.log(index)
  function handleOpen () {
    setOpen(false)
  }
      
  return (
    
    <Paper elevation={4} sx={{ width: '80%', marginLeft: 30 }}>
      <TableContainer sx={{ maxHeight: 800, maxWidth: 800, marginLeft: 20, padding: 20 }}>
        <Table stickyHeader aria-label='sticky table' sx={{padding: '10'}}>
          <TableHead >
            <TableRow>
              <TableCell align='center'></TableCell>
              {headerYears.map(year => (           
                <TableCell style={{width:100}} key={year} align='center' colSpan={`${subYears.length}`}><Typography variant='h5'>{year}</Typography></TableCell>
                      
                  ))}
            </TableRow>
            
            <TableRow>
              <TableCell align='center'><Typography variant='h6'>regions</Typography></TableCell>
              {headerYears.map(i => (
                subYears.map(e => <TableCell style={{width:100}} key={e} align='center'><Typography variant='body1'>{e}</Typography></TableCell>) )
              )}
            </TableRow>
            
          </TableHead>
          <TableBody>
            {Object.keys(Data).map((region, x) => (               
              <TableRow key={region} hover>
                <TableCell key={x} align='center'><Typography variant='h6'>{region}</Typography></TableCell>
                { headerYears.map(year => (
                  Data[region]?.G[year] ?
                    Object.entries(Data[region]?.G[year]).map
                      (data => <TableCell id={[region, year, data[0]]} key={data} align='center' onClick={(e) => { { setOpen(true); handleIndex(e) } }} ><Typography variant='subtitle1'>{data[1]?.value}</Typography></TableCell>) :
                    subYears.map(i => <TableCell key={i} align='center'><Typography color={'darkred'} variant='caption'>{'n/a'}</Typography></TableCell>)
                ))    
                }       
        
              </TableRow> ))}              
          </TableBody>
        </Table>
      </TableContainer>
      {open && <RenderInWindow index={index} handleOpen={handleOpen}></RenderInWindow> }      
    </Paper>
  
  );
}
             
export default App;
