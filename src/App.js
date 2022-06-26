import React, { useState, useRef } from 'react';
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
  const [input , setInput] = useState()
  const index = useRef();
  // !=========== here is preprocessing engine to generate a filled year and sub-year sequence without missed elememts
  const { result_array_years, longest_sub }  = yearsPreProcessing(source_data);
  
  
  const Data = dataPreProcessing();
    
  
  function dataPreProcessing() {
      let saved = {};
      saved = JSON.parse(sessionStorage.getItem('saved_data')) || {};
     if (Object.keys(saved).length===0)  {saved = source_data; console.log(saved)} 
     if (input) { saved = {...saved, [index.current.region]:
      {...saved[index.current.region], G:
        {...saved[index.current.region].G, [index.current.year]: 
          {...saved[index.current.region].G[index.current.year], [index.current.sub]: 
            {...saved[index.current.region].G[index.current.year][index.current.sub], value: input}}}}};
          sessionStorage.setItem('saved_data', JSON.stringify(saved))} 
      
     
     return saved;
    };

    
  function handleInput(input) {
    setInput(input);
  }  

  function handleIndex(region, year, sub){
      let a = {
        region: region,
        year: year,
        sub: sub
         }
         index.current = a;
    }


  function handleOpen () {
    setOpen(false)
  }
  
  return (
    
    <Paper elevation={4} sx={{ width: '85%', marginLeft: 20, marginTop: 5 }}>
      <TableContainer sx={{ maxHeight: 800, maxWidth: 1400, marginLeft: 5, padding: 10 }}>
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
      
      {isOpen && (<RenderInWindow handleInput={handleInput} handleOpen={handleOpen}></RenderInWindow>)}
     
    </Paper>
  
  );
}
             
export default App;
