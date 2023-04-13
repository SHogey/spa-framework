import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

//Definition of the columns of the data table
const columns: GridColDef[] = [
  { field:'title', headerName:'Title', width: 240, align:'center'},
  { field:'description', headerName:'Description', width: 240, align: 'center' },
  { field:'deadline', headerName:'Deadline', width: 240, align:'center' },
  { field:'priority', headerName: 'Priority', width: 240, align:'center' },
  { field:'isComplete', headerName: 'Is Complete', width: 240, align:'center', editable:true },
  { field:'action', headerName: 'Action', width: 240, align:'center', editable:true}
];

//Function from default
export default function AppRendering() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  const rows=[];

  return (
     <Box sx={{ flexGrow: 1 }}>
      <Card sx ={{ minWidth: 275}}>
        <CardHeader 
          sx = {{
            backgroundColor: 'blue',
            color: 'white'
          }}
          action = {
            <Button variant="contained" onClick={handleClickOpen}>&oplus; Add</Button>
          }
          title="&equiv; Frameworks"
        />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx = {{backgroundColor:'blue', color:'white'}}>Add Event</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              sx = {{
                padding:1,
                width:250
              }}
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="Title" variant="outlined" sx = {{width:250, padding:1}} required/>
              <br />
              <TextField id="outlined-basic" label="Description" variant="outlined" sx = {{width:250, padding:1}} required/>
              <br />
              <LocalizationProvider dateAdapter={AdapterDayjs} >
               <DatePicker label="Deadline" sx = {{width:250, padding:1}} />
              </LocalizationProvider>
              <br />
              <FormControl>
                <FormLabel id="priority-radios">Priority</FormLabel>
                <RadioGroup
                 aria-labelledby="priority-radios"
                name="radio-buttons-group"
                >
                  <FormControlLabel value="low" control={<Radio />} label="Low" />
                  <FormControlLabel value="med" control={<Radio />} label="Med" />
                  <FormControlLabel value="high" control={<Radio />} label="High" />
                </RadioGroup>
              </FormControl>
              <br />
              <Box sx = {{align:'right'}}>
                <Button variant="contained" color="info">&#8853; Add</Button>
                <Button variant="contained" color="error" onClick={handleClose}>&#128711; Cancel</Button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
        <Divider />
        <CardContent>
          <DataGrid
            columns={columns}
            rows={rows}
          />
        </CardContent>
      </Card>
    </Box>
  );
}