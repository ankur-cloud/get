import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import Logo from '../../Image/getlook.png';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Carausel from './Carausel'
import Carausm from './Carausm';
import Caro2 from './Caro2';
import appal from '../../Image/appal.png'
import car2 from '../../Image/car2.png'
import car3 from '../../Image/car3.png'
import carb1 from '../../Image/carb1.png'
import App from '../log/App';
import { NavLink } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(8),
      padding: theme.spacing(1),
    },
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: '#000'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // color: '#000'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar style={{ width: '170%' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)} startIcon={<MenuIcon />}
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} />
            <div style={{ float: 'right', margin: 'auto', width: '100px' }}>


              <ButtonGroup disableElevation variant="contained" color="primary" style={{ marginRight: "10px" }}>
                <Button variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<ShoppingBasketIcon />}></Button>

                <Button variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<MoreVertIcon />}></Button>
              </ButtonGroup>


            </div>

          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Home', 'Contact Us'].map((text, index) => (
              <ListItem button key={text}>

                <ListItemIcon>{index % 2 === 0 ? <NavLink to="/home"><HomeIcon /></NavLink> : <NavLink to="/">
                  <ContactsIcon />
                </NavLink>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>


        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Grid
            justify="center" container>
            <Grid item xs={12}>
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  placeholder="Search"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}

                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <Carausel />
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center" m={0}>
                <div className={classes.root1}>
                  <Paper elevation={3}>
                    <Typography variant="h4" gutterBottom>
                      Shop By Category
      </Typography>
                  </Paper>
                </div>

              </Box>
            </Grid>
            <Grid item xs={12}>
              <Carausm />
            </Grid>
            <Grid item xs={12}>
              <img src={appal} alt="" width="100%" />
            </Grid>

            <Grid item xs={12}>
              <Box textAlign="center" m={0}>
                <div className={classes.root1}>
                  <Paper elevation={3}>
                    <Typography variant="h4" gutterBottom>
                      Packages  <a href='#' style={{ float: 'right', fontSize: '20px', margin: 'auto', paddingTop: '10px' }}>View All</a>
                    </Typography>
                  </Paper>
                </div>

              </Box>

            </Grid>
            <Grid item xs={12}>
              <Caro2 />
            </Grid>

          </Grid>

        </main>
      </div>

    </React.Fragment >
  );
}

export default Home;
