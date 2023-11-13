import { Button, Grid, Paper, Typography } from "@mui/material";
import UserInfo from "./user-info";
import { useState } from "react";
import {
  CONSENTS_URL,
  CONSENT_APPROVAL_TEXT,
  GIVE_CONSENT,
} from "../../constants/app-constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postConsent } from "../../store/consent-store/actions";
import ConsentSelector from "./consent-selector";
import { validateEmail } from "../../utils/util";

const ConsentForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [checkedConsents, setCheckedConsents] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // dispatches postConsent action and navigates to consents page
  const handlePostConsent = () => {
    const param = {
      fname: fullName,
      email,
      consents: checkedConsents,
    };
    dispatch(postConsent(param));
    navigate(CONSENTS_URL);
  };

  // return bool value which is used for enable/disable consent-selector component
  const isConsentSelectorDisabled = () => {
    return !fullName || !validateEmail(email);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        width: 1,
        pb: "5rem",
        alignItems: "baseline",
        justifyContent: "center",
        pt: 5,
      }}
    >
      <Grid
        container
        columnSpacing={{ md: 2, xl: 2 }}
        rowSpacing={{ xs: 2, sm: 2 }}
        justifyContent="center"
      >
        <Grid item md={12} xs={12}>
          <UserInfo
            name={fullName}
            email={email}
            setFullName={setFullName}
            setEmail={setEmail}
          />
        </Grid>
        <Grid item md={10} xs={10}>
          <Typography sx={{ p: 4 }}>{CONSENT_APPROVAL_TEXT}</Typography>
        </Grid>
        <Grid item md={10} xs={10}>
          <div
            style={{
              display: "flex",
              paddingTop: 40,
              border: "0.5px solid lightgray",
              padding: "1rem",
            }}
          >
            <ConsentSelector
              disabled={isConsentSelectorDisabled()}
              checkedConsents={checkedConsents}
              setCheckedConsents={setCheckedConsents}
            />
          </div>
        </Grid>
        <Grid item md={10} xs={10}>
          <Button
            sx={{ mt: 3 }}
            disabled={checkedConsents.length === 0}
            variant="contained"
            onClick={handlePostConsent}
          >
            {GIVE_CONSENT}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ConsentForm;
