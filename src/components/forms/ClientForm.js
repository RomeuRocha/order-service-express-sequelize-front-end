import { React, useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';


import {
    useParams,
    useHistory
} from "react-router-dom";

import dataProvider from '../../service/dataProvider';
import EntityMenu from '../EntityMenu';


const useStyles = makeStyles((theme) => ({
    grid: {
        padding: '20px'
    },
    paper: {
        padding: theme.spacing(2),

        color: theme.palette.text.secondary,
        marginTop: '10px',
        marginBottom: 0,
        width: '100%',
        height: '420px',
        /*overflow: 'scroll'*/
    }
}));



const ClientForm = props => {

    const classes = useStyles();

    let { id } = useParams();

    let history = useHistory();

    const obj = () => {
        return {
            id: '',
            name: '',
            cpf: '',
            birthDate: new Date('1995-04-14T21:11:54')
        }
    }

    const [client, setClient] = useState(obj)

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {

        dataProvider.get('/client', id).then(res => {
            if (res.data) {
                setClient(res.data)
            } else {
                history.push(`/client`)
            }

        })

    }, []);

    const handleChangeName = (e) => {
        setClient({ ...client, name: e.target.value })
    }
    const handleChangeBirthdate = (e) => {
        if (e !== null) {
            setClient({ ...client, birthDate: e })
        }
    }
    const handleChangeCPF = (e) => {
        setClient({ ...client, cpf: e.target.value })
    }

    const saveObject = () => {

        if (client.id === '') {
            dataProvider.create('/client', client).then(res => {
                history.push(`/client/${res.data.id}`)//redirect for id(param in url)
                console.log('create')
            })
        } else {
            dataProvider.update('/client', client.id, client).then(res => {
                console.log('update')
            })
        }
        handleDisabled()
    }

    const handleDisabled = () => {
        setDisabled(!disabled)
    }

    const newObject = () => {

        setClient(obj)
        handleDisabled()
    }

    const cancelMethod = () => {
        
        dataProvider.get('/client', id).then(res => {
            if (res.data) {
                setClient(res.data)
            } else {
                history.push(`/client`)
            }

        })
        handleDisabled()
    }



    return (
        <>
            <EntityMenu
                saveMethod={saveObject}
                editMethod={handleDisabled}
                createMethod={newObject}
                buttonsFlag={disabled}
                cancelMethod={cancelMethod} />
            <Paper className={classes.paper}>

                <Grid container spacing={3} className={classes.grid} >

                    <Grid item xs={12}>
                        <TextField id="standard-basic-1"
                            label="Name"
                            value={client.name}
                            onChange={handleChangeName}
                            disabled={disabled} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-basic"
                            label="CPF"
                            value={client.cpf}
                            disabled={disabled}
                            onChange={handleChangeCPF}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="BirthDate"
                                format="dd/MM/yyyy"
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                value={client.birthDate}
                                disabled={disabled}
                                onChange={handleChangeBirthdate}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default ClientForm