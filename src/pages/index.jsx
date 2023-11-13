import {
  COLLECTED_CONSENT,
  CONSENTS_URL,
  GIVE_CONSENT,
  GIVE_CONSENT_URL,
} from "../constants/app-constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Consents from "./collected-consents";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import ConsentForm from "./give-consent";
import { a11yProps } from "../utils/util";
import { TabPanel } from "../components/tab-panel/tab-panel";

const Home = () => {
  const [value, setValue] = useState(0);
  const path = useLocation();
  const navigate = useNavigate();

  // sets value which is used tab selection
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // handled navigation on the basis of url
  useEffect(() => {
    if (path.pathname === CONSENTS_URL) {
      setValue(1);
    } else if (path.pathname === "/") {
      navigate(GIVE_CONSENT_URL);
    }
  }, [path, navigate]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid sx={{ borderRight: "0.5px solid gray" }} item md={2} xs={3}>
          <Tabs
            orientation="vertical"
            aria-label="Vertical tabs example"
            sx={{ borderColor: "divider", pt: 3 }}
            value={value}
            onChange={handleChange}
          >
            <Tab
              label={GIVE_CONSENT}
              component={Link}
              to={GIVE_CONSENT_URL}
              {...a11yProps(0)}
            />
            <Tab
              label={COLLECTED_CONSENT}
              component={Link}
              to={CONSENTS_URL}
              {...a11yProps(1)}
            />
          </Tabs>
        </Grid>
        <Grid item md={9} xs={9}>
          <TabPanel value={value} index={0}>
            <ConsentForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Consents />
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
