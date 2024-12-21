/* eslint-disable no-param-reassign */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MDBox";
import MKInput from "components/MDInput";

function InputOutlined() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={12} lg={4} py={1} mx="auto">
          <MKInput label="Outline" fullWidth />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default InputOutlined;