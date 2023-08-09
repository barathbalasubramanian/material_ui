import { useState } from 'react';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home, Projects } from './Icons'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function IconTabs() {
  const [value, setValue] = useState(0);

  const handleTabClick = (label) => {
    console.log('Clicked', label);
  }

  const handleChange = (event, newValue) => {
    console.log(value, newValue);
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" 
        sx={{
          '& .MuiTabs-scroller': {
            display: 'flex',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '3em',
          },
        }}>
          <Tab icon={<Home />} aria-label="phone" onClick={() => handleTabClick('home')} />
          <Tab icon={<Projects sx={{ fontSize: 25 }} />} aria-label="favorite" onClick={() => handleTabClick('project')} />
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default IconTabs;
