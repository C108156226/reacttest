import React from 'react';
import logo from './logo.svg';
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Saveicon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green,orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import 'fontsource-roboto';
//import { Button } from '@material-ui/core';和上面代碼功能一致


const useStyles = makeStyles({
  root: {
    background:'linear-gradient(45deg,#333,#999)',
      border:0,
      borderRadius:15,
      color:'white',
      padding:'5px 30px',
      marginBottom:10,
  },
});
const use1Styles = makeStyles({
  root: {
    display: 'flex',
  },
  paper: {
    margin:10,
  },
});
const outerTheme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette:{
    primary:{
      main:green[400],
    },
    secondary:{
      main:orange[400],
    }
  },
});

function CheckboxExample(){
  const [checked,setChecked]=React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return(
    <div>
      <Checkbox checked={checked}
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{
        'aria-label':'secondary checkbox'
      }}
      />
    </div>
  )
}
function Buttonstyled(){
  const classes = useStyles();
  return (
    <Button className={useStyles.root}>Default</Button>
  )
}
function App() {
  

  return (
    
    <ThemeProvider theme={outerTheme}>
    <div className="App">
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
            <Paper >
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
      </Paper>
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <TextField id="standard-basic" label="Standard" />
        <TextField id="outlined-basic" label="email" variant="outlined" type="email" />
        <CheckboxExample></CheckboxExample>
        <Buttonstyled>
        <Button startIcon={<DeleteIcon />} variant="contained" color="primary">
          Primary
        </Button>
        </Buttonstyled>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
