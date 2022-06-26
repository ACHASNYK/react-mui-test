import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { MenuItem, Typography, Button, ButtonGroup, Box, Select } from '@mui/material';

import { TextField } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import {Header, Row_data, Users, defaulData} from './window_data'



function New_Window({handleClose}) {
        
        
    const [row, setRow] = useState(Row_data);
    const [input, setInput] = useState(defaulData);
    const [validate, setValidate] = useState(false)
        const handleInputChange = (e) => {
        
            const { name, value } = e.target;
           setInput({
               ...input,
               [name]: value
           });
          
        }
    const submit = () => {
            let a = false
            const default_values = {
                value: '1',
                date: new Date().toISOString().substring(0, 10),
                user: 'Petro',
                comment: 'default input data'
            };
            Object.entries(input).map(e => (e[1] === '' ? (a = true) : null));
            return a? (setValidate(true), console.log(default_values)) : (setRow([...row, input]), console.log(input));
        }
        
        return (
        
            <Paper elevation={3} sx={{ width: '95%', maxWidth: 800, paddingBottom: 5, marginTop: 2, marginLeft: 2}}>
                <TableContainer sx={{ maxWidth: 650, maxHeight: 320, marginLeft:7, paddingTop:3, marginBottom: 5 }}  >
                        <Table stickyHeader  >
                            <TableHead sx={{maxWidth: 550}} >
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
                            </TableBody>
                        </Table>    
                    </TableContainer>

                        <Box sx={{marginTop: 5, paddingTop: 5, maxWidth: 600}} component="form" display="inline" width="600" >                            
                        <TextField 
                        sx={{ width: '15vw', marginLeft: 9, marginRight: 2 }}
                        required
                        variant='outlined'
                        name="value"                        
                        label="Input Value"
                        placeholder="Input value"
                        value={input.value}
                        type="number"
                        onChange={handleInputChange}
                        error={!input.value && validate}
                        />
                        <TextField 
                            sx={{width: '17vw', marginRight: 2}}                            
                             required
                            variant='outlined'
                            name="date"
                            label="Input date"
                            placeholder="Input date"
                            value={input.date}        
                            type="date"
                            onChange={handleInputChange}
                            error={!input.date && validate}                            
                            />
                                                             
                        <TextField 
                            sx={{width: '17vw', marginRight:2}}
                            required
                            // variant='outlined'
                            select
                            label="Input User Name"
                            name="user"
                            id="demo-simple-select-helper"
                            value={input.user}
                            onChange={handleInputChange}
                            error={!input.user && validate}
                            SelectProps={{native:true}}    
                            >
                        <option value="">{input.user}</option>
                                    {Users.map((e, i) => (
                                <option key={i} value={e}>{e}</option>                                        
                                ))}
                        </TextField>
                        <TextField 
                            sx={{width: '20vw', marginRight: 3}}
                            required
                            variant='outlined'
                            name="comment"
                            label="Input Comments"
                             placeholder="Input comments"
                            value={input.comment}        
                            type="text"
                            onChange={handleInputChange}
                            error={!input.comment && validate}                            
                                        
                            />
                                                              
                            <ButtonGroup sx={{width:'7ch'}} orientation='vertical'>
                            <Button variant='outlined' color='info' size='small' onClick={submit}>Submit</Button>
                            <Button variant='outlined' size='small' color='secondary' onClick={handleClose}>Close</Button>
                                </ButtonGroup>
                         </Box>           
                    
         </Paper>
           
    );

}

export default New_Window;