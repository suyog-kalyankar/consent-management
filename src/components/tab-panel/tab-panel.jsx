import { Box } from "@mui/material";

export function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        style={{ width: '100%' }}
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }