import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { CONSENTS_LIST } from "../../constants/app-constants";

const ConsentSelector = ({ disabled, checkedConsents, onCheckedConsents }) => {

  // handles selection of consent checkbox
  const handleConsentChange = (consent) => {
    if (checkedConsents.includes(consent)) {
      onCheckedConsents((oldValues) => {
        return oldValues.filter((val) => val !== consent);
      });
    } else {
      onCheckedConsents((data) => [...data, consent]);
    }
  };

  return (
    <FormGroup>
      {Object.values(CONSENTS_LIST).map((consent) => {
        return (
          <FormControlLabel
            disabled={disabled}
            key={consent}
            control={
              <Checkbox
                checked={checkedConsents?.includes(consent)}
                onChange={() => handleConsentChange(consent)}
              />
            }
            label={consent}
          />
        );
      })}
    </FormGroup>
  );
};

export default ConsentSelector;
