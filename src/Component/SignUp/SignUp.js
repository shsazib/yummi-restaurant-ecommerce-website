import * as React from "react";
import "./SignUp.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Log in" {...a11yProps(0)} />
          <Tab label="Sign Up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <input type="text" placeholder="Email" className="pop-pu-login-input" />
        <input
          type="text"
          placeholder="Password"
          className="pop-pu-login-input"
        />
        <div className="f-pass-sign">
          <a href="#" className="f-pass">
            Forgot password?
          </a>
          <a href="#" className="pop-up-sign">
            <button>Log In</button>
          </a>
        </div>
        <p className="pop-up-or">Or</p>
        <a href="#" className="pop-up-log-f">
          <button>Login With Facebook</button>
        </a>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <input type="text" placeholder="Name" className="pop-pu-login-input" />
        <input type="text" placeholder="Email" className="pop-pu-login-input" />
        <input
          type="text"
          placeholder="Password"
          className="pop-pu-login-input"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          className="pop-pu-login-input"
        />

        <div className="sign-up-checkbox">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox">
            By signing up you agree to our terms and conditions.
          </label>
        </div>
        <a href="#" className="pop-up-reg">
          <button>Create Account</button>
        </a>

        <p className="pop-up-or">Or</p>
        <a href="#" className="pop-up-log-f">
          <button>Login With Facebook</button>
        </a>
      </TabPanel>
    </Box>
  );
}
