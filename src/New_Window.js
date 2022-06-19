import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { FormGroup, Select, InputLabel, MenuItem, Typography, Button, ButtonGroup } from '@mui/material';

import { TextField } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import {Header, Row_data, Users, defaulData} from './window_data'
// import { FilledInput, Input } from '@mui/material';
// import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';


function New_Window({handleClose}) {
        
        
        const [row, setRow] = useState(Row_data);
        const [input, setInput] = useState(defaulData);
        const handleInputChange = (e) => {
        
            const { name, value } = e.target;
           setInput({
               ...input,
               [name]: value
           });
          
        }
        const submit = () => {
            const default_values = {
                value: '1',
                date: new Date().toISOString().substring(0, 10),
                user: 'Petro',
                comment: 'default input data'

            }
            setRow([...row, input]);
            // Object.entries(input).map(e => (
            //     !e[1](console.log('default data is ' + (default_values)))
            // ));
            // console.log('inputed data is ' + (input))
        }
        
        return (
        
            <Paper elevation={3} sx={{ width: '95%' }}>
                <TableContainer sx={{ maxWidth: 600, maxHeight: 400, marginLeft:7 }}  >
                        <Table stickyHeader  >
                            <TableHead sx={{maxWidth: 500}} >
                                <TableRow>
                                    {Header.map((item,i) => (
                                        <TableCell sx={{width: '25%'}} key={i} align='center'><Typography variant='h5'>{item}</Typography></TableCell>
                                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                                              
                         {Object.entries(row).map((item, i) => (
                             <TableRow key={i}>
                                 {Object.entries(item[1]).map((e, x) => (<TableCell key={x} align='center'>{e[1]}</TableCell> )) }
                             </TableRow>))}
                            <TableRow sx={{ maxWidth: 600}}>
                                <TableCell sx={{paddingLeft: 0, paddingRight: '4px', width: 25, textAlign:'center'}}>
                                    <TextField 
                                        variant='standard'
                                        name="value"
                                        label="Input Value"
                                        placeholder="Input value"
                                        value={input.value}        
                                        type="number"
                                        onChange={handleInputChange}        
                                    />
                                    </TableCell>
                                <TableCell sx={{paddingRight: '4px', width: 25}}>
                                    <TextField 
                                        variant='standard'
                                        name="date"
                                        label="Input date"
                                        placeholder="Input date"
                                        value={input.date}        
                                        type="date"
                                        onChange={handleInputChange}        
                                        />
                                </TableCell>
                                <TableCell sx={{paddingRight: '4px', width:25}}>
                                    <TextField 
                                        variant='standard'
                                        select
                                        label="Input User Name"
                                        name="user"
                                        id="demo-simple-select-helper"
                                        value={input.user}
                                        onChange={handleInputChange}
                                        >
                                            <MenuItem value="">{input.user}</MenuItem>
                                                {Users.map((e, i) => (
                                            <MenuItem key={i} value={e}>{e}</MenuItem>                                        
                                        ))}
                                    </TextField>
                                </TableCell>
                                <TableCell>
                                    <TextField 
                                        variant='standard'
                                        name="comment"
                                        label="Input Comments"
                                        placeholder="Input value"
                                        value={input.comment}        
                                        type="text"
                                        onChange={handleInputChange}        
                                        />
                                </TableCell>
                                <TableCell rowSpan={2}>
                                    <ButtonGroup orientation='vertical'>
                                        <Button variant='outlined' color='info' size='small' onClick={submit}>Submit</Button>
                                        <Button variant='outlined' size='small' color='secondary' onClick={handleClose}>Close</Button>
                                    </ButtonGroup>
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
         </Paper>
           
    );

}

export default New_Window;