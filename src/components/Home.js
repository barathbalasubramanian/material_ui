import { useState } from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { createTheme  } from '@mui/material/styles';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function IconTabs() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    console.log(value ,  newValue)
    setValue(newValue);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleTabClick = () => {
    console.log('Tab was clicked!');
    setOpen(true);
    setTimeout(() => {
      setOpen(false)
    }, 1000)
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" 
      sx={{
        '& .MuiTabs-scroller': {
          display: 'flex',
          width: '100vw',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: '3em'
        },
      }}>

        <Tab icon={<PhoneIcon />} aria-label="phone" theme={darkTheme} />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" theme={darkTheme} onClick={handleTabClick} />
        <Tab icon={<PersonPinIcon />} aria-label="person" theme={darkTheme} 
        sx={{
          color:'red!important',
        }} />


      </Tabs>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default IconTabs;