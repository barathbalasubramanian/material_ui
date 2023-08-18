import { useState, useEffect } from "react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Home, Projects } from "./Icons";
import { useLocation, useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function IconTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialTabValue =
    location.pathname === "/about"
      ? 0
      : location.pathname === "/contact"
      ? 1
      : 0;
  const [value, setValue] = useState(initialTabValue);

  useEffect(() => {
    if (location.pathname === "/about") setValue(0);
    else if (location.pathname === "/contact") setValue(1);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (newValue === 0) navigate("/about");
    else if (newValue === 1) navigate("/contact");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon tabs example"
          sx={{
            "& .MuiTabs-scroller": {
              display: "flex",
              width: "100vw",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: "3em",
              // color: "`${var(--text)} !important`",
            },
          }}
        >
          <Tab icon={<Home sx={{ fontSize: 30 }} />} aria-label="phone" />
          <Tab
            icon={<Projects sx={{ fontSize: 30 }} />}
            aria-label="favorite"
          />
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default IconTabs;
