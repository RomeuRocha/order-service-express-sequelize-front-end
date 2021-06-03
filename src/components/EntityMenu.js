import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        
    },
    button: {
        margin: theme.spacing(1),
    }

}));

const EntityMenu = (props) => {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<AddBoxIcon />}
                            onClick={props.createMethod ? props.createMethod :console.log('createMethod not  alowed in Entity Menu') }
                            disabled={props.buttonsFlag ? !props.buttonsFlag :true }
                        >
                            New
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<EditIcon />}
                            onClick={props.editMethod ? props.editMethod :console.log('editMethod not  alowed in Entity Menu') }
                            disabled={props.buttonsFlag ? !props.buttonsFlag :true }
                        >
                            Edit
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"

                            className={classes.button}
                            startIcon={<SaveIcon />}
                            onClick={props.saveMethod ? props.saveMethod :console.log('saveMethod not  alowed in Entity Menu') }
                            disabled={props.buttonsFlag ? props.buttonsFlag : false }
                       >
                            Save
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"

                            className={classes.button}
                            startIcon={<CancelIcon />}
                            onClick={props.cancelMethod ? props.cancelMethod :console.log('cancelMethod not  alowed in Entity Menu') }
                            disabled={props.buttonsFlag ? props.buttonsFlag : false }
                       >
                            Cancel
                        </Button>

                        
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default EntityMenu