import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit
import MKBox from "components/MDBox";
import MKInput from "components/MDInput";

function InputDynamic() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput variant="standard" label="Regular" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputDynamic;
