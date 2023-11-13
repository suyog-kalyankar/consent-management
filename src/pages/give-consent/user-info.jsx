import { Grid, TextField } from "@mui/material";

const UserInfo = ({ name, email, setFullName, setEmail }) => {
  const handleName = (e) => {
    if (e.target.value !== " ") {
      setFullName(e.target.value);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item md={5} rowSpacing={5} columnSpacing={{ xs: 1 }}>
        <TextField
          required
          id="f-name"
          value={name}
          inputProps={{ "data-testid": "f-name" }}
          onChange={handleName}
          label="Full name"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item md={5} rowSpacing={2} columnSpacing={{ xs: 1 }}>
        <TextField
          required
          type="email"
          id="email"
          inputProps={{ "data-testid": "email" }}
          value={email}
          onChange={handleEmail}
          label="Email Address"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default UserInfo;
