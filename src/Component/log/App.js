import React, { useState } from 'react';

import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Carausm from '../Home/Carausm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import customer from '../../Image/customer.png'


const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.background.paper,
    padding: theme.spacing(1),
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  loginBackground: {
    backgroundImage: `url(${customer})`,
    backgroundSize: `100%`,
    paddingTop: 600,
    backgroundRepeat: "no-repeat",

  }
}));

const App = () => {

  const [valNum, setValNum] = useState();

  const input = (event) => {
    const value = event.target.value;
    setValNum(value);
  }


  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div >
        <Container maxWidth="xl" className={classes.loginBackground} >

          <div className={classes.root}>
            <Box textAlign="center" m={1}>
              <div className={classes.root}>{"Login/ Signup Using"}</div>
            </Box>


            <Grid
              justify="center" container>
              <Grid item xs={6} spacing={0}>
                <Box textAlign="center" m={0}>
                  <NavLink to="/home"><Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<FacebookIcon />}
                  >
                    Facebook</Button></NavLink>

                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="center" m={0}>
                  <NavLink to="/home"><Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<MailIcon />}
                  >
                    Google</Button></NavLink>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box textAlign="center" m={0}>

                  <input style={{ backgroundColor: '#FFF' }} type='number' value={valNum} placeholder="Mobile Number" onchange={input} />


                </Box>

              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
