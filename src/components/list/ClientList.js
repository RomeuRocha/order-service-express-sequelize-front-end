import { React, useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import dataProvider from '../../service/dataProvider'

import {  
    useHistory
  } from "react-router-dom";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'cpf', headerName: 'CPF', width: 150 },
    { field: 'birthDate', headerName: 'BirthDate', width: 200 },
];

const useStyles = makeStyles((theme) => ({

    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginTop: '10px',
        marginBottom: 0,
        width:'100%',
        height: '500px',
        /*overflow: 'scroll'*/
    }
}));

const ClientList = props => {

    const [clients, setClients] = useState([])

    let history = useHistory();

    const classes = useStyles();

    useEffect(() => {

        dataProvider.getAll('/client').then(res => {
            setClients(res.data)
        })

    }, []);

    const rowClick = (params)=>{
  
        history.replace(`client/${params.id}`)
        //console.log(params)
    }

    return (
        <Paper className={classes.paper}>
            <DataGrid
                rows={clients}
                columns={columns}
                pageSize={10}
                checkboxSelection
                
                onRowClick={rowClick}
                
                />
        </Paper>
    )
}

export default ClientList