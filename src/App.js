import React, { useState, useCallback } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Data as source_data}  from './data';
import RenderInWindow from './RenderWindow';
import { Typography } from '@mui/material';
import { yearsPreProcessing } from './helper';





function App() {
  
  const [isOpen, setOpen] = useState(false);
  const [index, setIndex] = useState();
  // const [data , setData] = useState()
  
  const { result_array_years, longest_sub }  = yearsPreProcessing(source_data);
  
  const Data = dataPreProcessing() 
  function dataPreProcessing() {
    let load = JSON.parse(sessionStorage.getItem('saved_data') || {});
    if (load !== null) return load; return source_data  
  }    
  
  function handleIndex(region, year, sub) {
    let saved = JSON.parse(sessionStorage.getItem('saved_data') || {});
    
    Object.keys(saved) ? saved = source_data : saved;  
       
    saved[region]?.G[year]?.[sub].value = input_value;
    return sessionStorage.setItem('saved_data', JSON.stringify(saved))
  }
    setIndex({
      region: region,
      year: year,
      sub: sub,

    });
    
  }


  function handleOpen () {
    setOpen(false)
  }
  console.log(isOpen)
  console.log(document.getElementById('portal'))
  console.log(document.getElementById('root'))
  console.log(document.getElementById('www'))
  console.log(index)
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
                  Data[region]?.G[year] ? (longest_sub.map(sub => (Data[region]?.G[year]?.[sub] ? <TableCell key={sub} align='center' onClick={(e) => { setOpen(true); handleIndex(region, year, sub) }} >{Data[region]?.G[year]?.[sub]?.value}</TableCell> : 
                  <TableCell key={sub} align='center'><Typography color={'darkred'} variant='caption'>{'n/a'}</Typography></TableCell> ))) :
                  
                    (longest_sub.map(o => <TableCell key={o} align='center'><Typography color={'darkred'} variant='caption'>{'n/a'}</Typography></TableCell>))))}
                                
        
              </TableRow> ))}              
          </TableBody>
        </Table>
      </TableContainer>
      
      {isOpen && (<RenderInWindow index={index} handleOpen={handleOpen}></RenderInWindow>)}
     
    </Paper>
  
  );
}
             
export default App;
