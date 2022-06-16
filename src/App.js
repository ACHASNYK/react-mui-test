import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Data } from './data';
// import './App.css';



function App() {
  // preprocessing of a data to find a longest row with a years presented to build a header with it.
  const dataPreProcessing = () => {
    let len = [[]];
    let a = [];
    Object.keys(Data).map(e => {
      a = (Object.keys(Data[e].G))
      len.push(a);
    })
    let max = len[0].length;
    let answer = len[0];
    for (let i = 1; i < len.length; i++) {
      
      if (len[i].length > max) {
        answer = len[i]
        max = len[i].length;
      }
      return console.log(answer)
    }
  }
  dataPreProcessing();
  const test = Object.entries(Data)
  console.log(test)
  const headerRow1 = Object.keys(Data.Kyivska.G);
    console.log(headerRow1)// Do whatever you like with key and value
  // const headerRow2 = Object.keys(Data.Kyivska.G.)
  const headerRow2 = Object.entries(Data.Kyivska.G)
  console.log(headerRow2)
  
  const headerRow4 = Object.values(Data.Kyivska.G)
  // headerRow4.map((e, i) => {
  //   return Object.values(e).map(a => console.log(a.value))
  // })
                  
  
  console.log(headerRow4)
    
    
  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 500, maxWidth: 1000 }}>
        <Table stickyHeader aria-label='sticky table'>
          {/* <TableRow>
            <TableCell align='center'>
              <Table>
                <TableHead>
                  <TableRow>
                      <TableCell align='center' rowSpan={2}><strong>regions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(Data).map(e => (<TableRow><TableCell align='center'>{e}</TableCell></TableRow>))}
                </TableBody>
              </Table>
            </TableCell>
            {Object.keys(Data).map()}
            <TableCell align='center'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableRow>
                      <TableCell align='center' colSpan={3}>
                        {}
                      </TableCell>
                    </TableRow>
                  </TableRow>
                </TableHead>
              </Table>
            </TableCell> */}
            <TableHead>
            <TableRow> 
              <TableCell></TableCell>
              {Object.keys(Data.Kyivska.G).map((e,i) => (
                <TableCell key={i} align='center' colSpan={3}>{e}</TableCell>
              ))} 
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                     Regions
               </TableCell>
              {headerRow4.map((e, i) => {       
                return (Object.keys(e).map(a =>
                  (<TableCell key={a} align='center'>{a}</TableCell>)))
             
                }
              )}
        
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(Data).map((i) =>
            {return (<TableRow>
              <TableCell align='center'>{i}</TableCell>
              {(Object.values(Data[i].G).map((e, x) => {
                return (Object.values(e).map(a => (<TableCell key={a} align="center">{a.value}</TableCell>)))
              })) }
            </TableRow>)
              
              // <TableRow>{i}
                {/* <TableCell align='center'>{i}</TableCell> */}
              {/* {headerRow4.map((e, i) => {
                return (Object.values(e).map(a =>
                  (<TableCell key={a} align='center'>{a.value}</TableCell>)))
             
              }
              )} */}
                // </TableRow>
            }
            )}      
          </TableBody>
          </Table>
      </TableContainer>
    </Paper>  
    

    // <Paper sx={{ width: '100%' }}>
      // <TableContainer sx={{ maxHeight: 500, maxWidth: 1500 }}>
        //  <Table stickyHeader aria-label='sticky table'>
            // <TableHead>
              // <TableRow>
    //           <TableCell align='center' colSpan={1}></TableCell>
              
    //           {headerRow1.map(e => (
    //            <TableCell align='center' colSpan={3}>{e}</TableCell>
    //          ))} 
    //         </TableRow>
    //         <TableRow>
    //           <TableCell align='center' colSpan={1}>
    //                 Regions
    //           </TableCell>
    //           {headerRow4.map((e, i) => {
                
    //             (Object.keys(e).map(a => (<p>{a}</p>) ))
                
    //           }
    //           )}
              
    //         </TableRow>
    //       </TableHead>
    //     </Table>
    //   </TableContainer>
    //  </Paper>
  );
}
// {Data.Kyivska.G.forEach((e) => {
//                 <TableCell align='center' colSpan={1}>{Object.keys(e)}</TableCell>


//               })};
export default App;
